import { AxiosResponse } from "axios";
import React, { createContext, useEffect, useState, useReducer } from "react";
import walletReducer from "../reducers/wallet.reducer";
import { getDecimals } from "../helpers/helper";
import axios from "axios";

const defWallet = {
    wallet: {
        total: false,
        assets: [{}],
        chains: [{}],
        protocols: [{}]
    }
}

// Helper functions


export const DashboardContext = createContext<any | null>(null);

export function DashboardProvider(props: any) {
    const [wallet, walletDispatch] = useReducer(walletReducer, defWallet);
    const [addressID, setAddressID] = useState('');
    const [isAPIRequested, setIsAPIRequested] = useState(false);
    const [loading, setLoading] = useState(true);
    
    // Api calls
    const APIRequests = {
        base: 'https://openapi.debank.com/v1/',
        balance: `user/total_balance?id=${addressID}`,
        protocol: `user/simple_protocol_list?id=${addressID}`,
        asset: `user/token_list?id=${addressID}&is_all=false`,
    }
    

    const getAssets = async(): Promise<void> => {
        setLoading(true);
        const assetsAPI = axios.get(APIRequests.base + APIRequests.asset).then((res: AxiosResponse)  => res.data);
        const assets = await assetsAPI
        .then((data: any) => (Object.values(data)));
        const sortAssets = assets.sort((a: any, b: any) => {
            const A = a.amount * a.price;
            const B = b.amount * b.price;
            return B - A;
        });
        const finalAssets = sortAssets.map((item: any) => {
            const value = item.amount * item.price;
            const price = getDecimals(item.price);
            const amount = getDecimals(item.amount);
            const balance = `${amount} ${item.symbol}`;
            return {
                name: item.name,
                symbol: item.symbol,
                price,
                balance,
                value: value.toFixed(1),
                chain: item.chain,
                logo_url: item.logo_url
            }
        })

        walletDispatch({ type: 'LOAD-ASSETS', payload: {assets: finalAssets}});
    }


    const getChains = async (): Promise<void> => {
        const chainsAPI = axios.get(APIRequests.base + APIRequests.balance).then((res: AxiosResponse)  => res.data);
        const chains = await chainsAPI
        .then((data: any) => {
            walletDispatch({
                type: 'LOAD-TOTAL', payload: {total: data.total_usd_value.toFixed()}
            });
            return data.chain_list;
        })
        .then((chains: Array<string | number>) => chains)
        .then((chain: any) => 
        chain.filter(
            (c: any) => c.usd_value > 0))
        .then((chain: any) => 
        chain.sort((a: any, b: any) => b.usd_value - a.usd_value));

        walletDispatch({ type: 'LOAD-CHAINS', payload: {chains: chains}});
        console.log(wallet);
    }
    
    const getProtocols = async(): Promise<void> => {
        const protocolAPI = axios.get(APIRequests.base + APIRequests.protocol).then((res: AxiosResponse)  => res.data);
        const protocols = await protocolAPI
        .then((data: any) => data.sort((a: any, b:any) => b.asset_usd_value - a.asset_usd_value));
        walletDispatch({ type: 'LOAD-PROTOCOLS', payload: {protocols: protocols}});
        setLoading(false);
    }

    useEffect(() => {
        async function getData() {
            if (!isAPIRequested) return;
            await getAssets();
            await getChains();
            await getProtocols();
        }
        getData();
    }, [isAPIRequested, addressID]);


    return (
        <DashboardContext.Provider value={{wallet, addressID, setAddressID, isAPIRequested, setIsAPIRequested, loading}}>
            {props.children}
        </DashboardContext.Provider>
    )
}
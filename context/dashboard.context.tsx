import { AxiosResponse } from "axios";
import React, { createContext, useEffect, useState } from "react";
const axios = require('axios').default;
import Router from 'next/router';



// Helper functions
const getDecimals = (num: number) => {
    if (num > 1000) return num.toFixed();
    if (num > 100) return num.toFixed(1);
    if (num > 10) return num.toFixed(2);
    if (num < 10) return num.toFixed(2);
    if (num < 1) return num.toFixed(3);
    if (num < 0.1) return num.toFixed(4);
    if (num < 0.01) return num.toFixed(5);
    if (num < 0.001) return num.toFixed(6);
    if (num < 0.0001) return num.toFixed(7);
    if (num < 0.00001) return num.toFixed(8);
    if (num < 0.000001) return num.toFixed(9);
    if (num < 0.0000001) return num.toFixed(10);
}

export const DashboardContext = createContext<any | null>(null);

export function DashboardProvider(props: any) {
    const [wallet, setWallet] = useState<any[]>([]);
    const [balances, setBalances] = useState('');
    const [totalUSD, setTotalUSD] = useState('');
    const [protocols, setProtocols] = useState('');
    const [addressID, setAddressID] = useState('');
    const [isAPIRequested, setIsAPIRequested] = useState(false);
    const [loading, setLoading] = useState(true);
    
    // Api calls
    const APIRequests = {
        base: 'https://openapi.debank.com/v1/',
        balance: `user/total_balance?id=${addressID}`,
        protocol: `user/simple_protocol_list?id=${addressID}`,
        wallet: `user/token_list?id=${addressID}&is_all=false`,
    }
    

    const getWallet = async(): Promise<void> => {
        setLoading(true);
        const walletAPI = axios.get(APIRequests.base + APIRequests.wallet).then((res: AxiosResponse)  => res.data);
        const wallet = await walletAPI
        .then((data: any) => (Object.values(data)));
        const sortWallet = wallet.sort((a: any, b: any) => {
            const A = a.amount * a.price;
            const B = b.amount * b.price;
            return B - A;
        });
        const formatWallet = sortWallet.map((item: any) => {
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
        setWallet(formatWallet);
    }


    const getBalances = async (): Promise<void> => {
        const balancesAPI = axios.get(APIRequests.base + APIRequests.balance).then((res: AxiosResponse)  => res.data);
        const balances = await balancesAPI
        .then((data: any) => {
            setTotalUSD(data.total_usd_value.toFixed());
            return data.chain_list;
        })
        .then((chains: Array<string | number>) => chains)
        .then((chain: any) => 
        chain.filter(
            (c: any) => c.usd_value > 0))
        .then((chain: any) => 
        chain.sort((a: any, b: any) => b.usd_value - a.usd_value));
        setBalances(balances);
    }
    
    const getProtocols = async(): Promise<void> => {
        const protocolAPI = axios.get(APIRequests.base + APIRequests.protocol).then((res: AxiosResponse)  => res.data);
        const protocols = await protocolAPI
        .then((data: any) => data.sort((a: any, b:any) => b.asset_usd_value - a.asset_usd_value));
        setProtocols(protocols);
        setLoading(false);
    }

    useEffect(() => {
        async function getData() {
            if (!isAPIRequested) return;
            await getWallet();
            await getBalances();
            await getProtocols();
        }
        getData();
    }, [isAPIRequested, addressID]);


    return (
        <DashboardContext.Provider value={{wallet, balances, totalUSD, protocols, addressID, setAddressID, isAPIRequested, setIsAPIRequested, loading}}>
            {props.children}
        </DashboardContext.Provider>
    )
}
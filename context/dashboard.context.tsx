import { AxiosResponse } from "axios";
import React, { createContext, useEffect, useState } from "react";
const axios = require('axios').default;


const API = {
    base: 'https://openapi.debank.com/v1/',
    balance: 'user/total_balance?id=0x156672fD47902118ec64c00092e9b0e6eB7470a8',
    protocol: 'user/simple_protocol_list?id=0x156672fD47902118ec64c00092e9b0e6eB7470a8',
    wallet: "user/token_list?id=0x156672fD47902118ec64c00092e9b0e6eB7470a8&is_all=false",
}


const balancesAPI = axios.get(API.base + API.balance).then((res: AxiosResponse)  => res.data);
const protocolAPI = axios.get(API.base + API.protocol).then((res: AxiosResponse)  => res.data);
const walletAPI = axios.get(API.base + API.wallet).then((res: AxiosResponse)  => res.data);



export const DashboardContext = createContext<any | null>(null);

export function DashboardProvider(props: any) {
    const [wallet, setWallet] = useState('');
    const [balances, setBalances] = useState('');
    const [totalUSD, setTotalUSD] = useState('');
    const [protocols, setProtocols] = useState('');
    const [loading, setLoading] = useState({wallet: true, balances: true, protocols: true});
    

    /* const getWallet = async(): Promise<void> => {
        const wallet = await walletAPI
        .then((data: any) => console.log(data))
        setLoading({...loading, wallet: false});
    } */


    const getBalances = async (): Promise<void> => {
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
        setLoading({...loading, balances: false});
    }
    
    const getProtocols = async(): Promise<void> => {
        const protocols = await protocolAPI
        .then((data: any) => data.sort((a: any, b:any) => b.asset_usd_value - a.asset_usd_value));
        setProtocols(protocols);
        setLoading({...loading, protocols: false});
    }

    useEffect(() => {
        async function getData() {
            await getBalances();
            await getProtocols();
        }
        getData();
    }, []);

    return (
        <DashboardContext.Provider value={{wallet, balances, totalUSD, protocols, loading}}>
            {props.children}
        </DashboardContext.Provider>
    )
}
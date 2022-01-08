import type { NextPage } from 'next';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Loader from '../components/Loader';

import { DashboardContext } from '../context/dashboard.context';
import { useContext } from 'react';



const Home: NextPage = () => {
  const {wallet} = useContext(DashboardContext);
  return (
    <>
      <Header/>
      {(!wallet.isAPIRequested || wallet.isLoading) 
        ? <Loader loading={wallet.isAPIRequested} />
        : <Dashboard variant='main'/>}
    </>
  )
}

export default Home

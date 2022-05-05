import type { NextPage } from 'next';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Footer from '../components/Footer';

import { DashboardContext } from '../context/dashboard.context';
import { useContext } from 'react';



const HomePage: NextPage = () => {
  const {wallet} = useContext(DashboardContext);
  return (
    <>
      <Header/>
      {(!wallet.isAPIRequested || wallet.isLoading) 
        ? <Loader loading={wallet.isAPIRequested} />
        : <Dashboard variant='main'/>}
      <Footer />
    </>
  )
}

export default HomePage

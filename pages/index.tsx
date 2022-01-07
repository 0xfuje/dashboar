import type { NextPage } from 'next';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Loader from '../components/Loader';

import { DashboardContext } from '../context/dashboard.context';
import { useContext } from 'react';



const Home: NextPage = () => {
  const {isAPIRequested, loading} = useContext(DashboardContext);
  console.log(isAPIRequested);
  return (
    <>
      <Header/>
      {(!isAPIRequested || loading) ? <Loader loading={isAPIRequested} /> : <Dashboard variant='main'/>}
    </>
  )
}

export default Home

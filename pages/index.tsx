import type { NextPage } from 'next';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';

import { DashboardContext } from '../context/dashboard.context';
import { useContext } from 'react';


const Home: NextPage = () => {
  const {isAPIRequested} = useContext(DashboardContext);
  console.log(isAPIRequested);
  return (
    <>
      <Header/>
      {(!isAPIRequested) ? '' : <Dashboard variant='main'/>}
    </>
  )
}

export default Home

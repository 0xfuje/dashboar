import type { NextPage } from 'next';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import { DashboardProvider } from '../context/dashboard.context';


const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <DashboardProvider>
        <Dashboard variant='main'/>
      </DashboardProvider>
      
    </>
  )
}

export default Home

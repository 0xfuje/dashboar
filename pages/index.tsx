import type { NextPage } from 'next';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';



const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Dashboard variant='main'/>
    </>
  )
}

export default Home

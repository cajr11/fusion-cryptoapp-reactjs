import React from 'react';
import BtcUsdMainChart from '../components/home/BtcUsdMainChart';
import Poster from '../components/home/Poster';

const Home = () => {
  return (
    <div className='border-black w-full mb-22'>
      <div className='w-11/12 mx-auto mt-2 md:flex md:w-full md:mx-auto'>
        <Poster />
        <BtcUsdMainChart />
      </div>
    </div>
  )
}

export default Home
import React from 'react';
import BtcUsdMainChart from '../components/home/BtcUsdMainChart';
import Poster from '../components/home/Poster';

const Home = () => {
  return (
    <div className='border-black w-full'>
      <div className='w-11/12 mx-auto mt-2'>
        <Poster />
        <BtcUsdMainChart />
      </div>
    </div>
  )
}

export default Home
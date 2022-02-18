import React from 'react';
import BtcUsdMainChart from '../components/home/BtcUsdMainChart';
import Poster from '../components/home/Poster';
import CarouselTopTen from '../components/home/CarouselTopTen';

const Home = () => {
  return (
    <div className='border-black w-full mb-2'>
      <div className='w-11/12 mx-auto mt-2 md:flex md:w-full md:px-3 md:justify-between'>
        <Poster />
        <BtcUsdMainChart />
      </div>
      <div className="w-11/12 mx-auto mt-2 md:h-60 md:mt-5 bg-neutral-900">
          <h1>Top 10 Coins</h1>
          <CarouselTopTen />
      </div>
    </div>
  )
}

export default Home
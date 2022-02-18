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
      <div className="w-11/12 md:carousel-coins mx-auto mt-2 h-64 md:h-64 bg-neutral-900 flex flex-col justify-center rounded-md">
          <h1 className='mt-3 mb-3 text-center text-slate-300 font-bold'>Top 10 Coins</h1>
          <CarouselTopTen />
      </div>
    </div>
  )
}

export default Home
import React from 'react';
import rand from "../../assets/block-chain.jpeg"

const TokenHeading = () => {
  return (
    <div className='w-full flex justify-between h-20 items-center'>

      {/* Heading & Logo */}
        <div className='flex items-center'>
          <img src={rand} alt="token logo" className='h-8 w-8 rounded-full object-cover mr-2 md:h-10 md:w-10 lg:h-16 lg:w-16 lg:mr-4' />
          <h1 className='text-stone-300 text-3xl font-bold'>Bitcoin <span className='hidden md:inline-block'>(BTC)</span></h1>
        </div>

        {/* Price */}
        <div className='flex w-1/2 space-x-5 justify-end md:space-x-10'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-sm md:text-base lg:text-lg text-stone-300 font-bold'>Price</h2>
                <p className='text-lg lg:text-xl text-gray-900 font-semibold'>$38,800.33</p>
            </div>

            {/* 24h% Change */}
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-sm md:text-base lg:text-lg text-stone-300 font-bold'>24h%</h2>
                <p className='text-lg lg:text-xl text-gray-900 font-semibold'>0.36%</p>
            </div>
        </div>
    </div>
  )
}

export default TokenHeading;
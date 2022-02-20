import React from 'react'

const TokenHeading = () => {
  return (
    <div className='w-full flex justify-between h-20 items-center'>
        <h1 className='text-stone-300 text-3xl font-bold'>Bitcoin (BTC)</h1>
        <div className='flex w-1/2 space-x-5 justify-end md:space-x-10'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-sm md:text-base lg:text-lg text-stone-300 font-bold'>Price</h2>
                <p className='text-lg lg:text-xl text-gray-900 font-semibold'>$38,800.33</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-sm md:text-base lg:text-lg text-stone-300 font-bold'>24h%</h2>
                <p className='text-lg lg:text-xl text-gray-900 font-semibold'>0.36%</p>
            </div>
        </div>
    </div>
  )
}

export default TokenHeading;
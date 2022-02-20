import React from 'react'

const TokenStats = () => {
  return (
    <div className='h-92 w-full border border-gray-600 rounded-md mt-4 mb-4 bg-zinc-900'>

        {/* Market Cap */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>Market Cap</p>
            <p className='text-cyan-200 font-semibold md:text-lg lg:text-xl'>$1300000</p>
        </div>

        {/* Price to BTC */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>Price to BTC</p>
            <p className='text-cyan-200 font-semibold md:text-lg lg:text-xl'>$1300000</p>
        </div>

        {/* 24h Volume */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>24h Volume</p>
            <p className='text-cyan-200 font-semibold md:text-lg lg:text-xl'>$1300000</p>
        </div>

        {/* Rank */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>Rank</p>
            <p className='text-cyan-200 font-semibold md:text-lg lg:text-xl'>$1300000</p>
        </div>

        {/* Website */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>Website</p>
            <p className='text-cyan-200 font-semibold md:text-lg lg:text-xl'>$1300000</p>
        </div>

        {/* Whitepaper */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>Whitepaper</p>
            <p className='text-cyan-200 font-semibold md:text-lg lg:text-xl'>$1300000</p>
        </div>
    </div>
  )
}

export default TokenStats
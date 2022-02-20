import React from 'react';
import CurrencyFormat from 'react-currency-format';

const TokenStats = ({ market, btcPrice, volume, rank, website, whitepaper}) => {
  return (
    <div className='h-92 w-full border border-gray-600 rounded-md mt-4 mb-4 bg-zinc-900'>

        {/* Market Cap */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>Market Cap</p>
            <p className='text-stone-300 md:text-lg'>
                <CurrencyFormat value={market} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </p>
        </div>

        {/* Price to BTC */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>Price to BTC</p>
            <p className='text-stone-300 md:text-lg'>{parseFloat(btcPrice).toFixed(8)} BTC</p>
        </div>

        {/* 24h Volume */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>24h Volume</p>
            <p className='text-stone-300 md:text-lg'>
                <CurrencyFormat value={volume} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </p>
        </div>

        {/* Rank */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>Rank</p>
            <p className='text-stone-300 md:text-lg'>{rank}</p>
        </div>

        {/* Website */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>Website</p>
            <p className='text-stone-300 md:text-lg'>
                <a href={website} target="_blank" rel="noreferrer">{website}</a>
            </p>
        </div>

        {/* Whitepaper */}
        <div className='h-16 border border-b-gray-600 border-t-0 border-x-0 flex items-center justify-between px-4'>
            <p className='text-stone-300 font-bold md:font-light md:text-lg lg:text-xl'>Whitepaper</p>
            <p className='text-stone-300  md:text-lg'>
                <a href={whitepaper} target="_blank" rel="noreferrer">{whitepaper}</a>
            </p>
        </div>
    </div>
  )
}

export default TokenStats
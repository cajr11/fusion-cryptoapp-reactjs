import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { NavLink } from 'react-router-dom';

const TokensListItem = ({ name, rank, volume, market, icon, price, change, symbol, path}) => {
    const isNegative = parseFloat(change) < 0 ? true : false;

  return (
   <NavLink >
        <div className='h-16 border border-x-0 border-t-0 border-b-gray-600 flex items-center justify-center text-stone-300 tokens-text-smaller md:tokenlist-item lg:text-xs cursor-pointer'>

            {/* Ranking */}
            <div className='h-full flex justify-center items-center basis-1/12 font-bold'>{rank}</div>

            {/* Name, Logo & Ticker */}
            <div className='h-full flex flex-col justify-center items-center basis-2/12'>
                <img src={icon} alt="token logo" className='h-5 w-5 object-cover rounded-full mb-1'/>
                <p>
                    <span className='hidden lg:inline-block md:mr-1'>{name}</span>
                    <span className='lg:text-stone-500'>{symbol}</span>
                </p>
            </div>

            {/* Price */}
            <div className='h-full flex justify-center items-center basis-2/12'>
                <CurrencyFormat value={parseFloat(price).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>

            {/* 24h% Change */}
            <div className={`${!isNegative ? "text-green-600" : "text-red-600"} h-full flex justify-center items-center basis-1/12`}>{change.split("-").join("")}%</div>

            {/* Market Cap */}
            <div className='h-full flex justify-center items-center basis-3/12'>
                <CurrencyFormat value={market} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>

            {/* 24h Volume */}
            <div className='h-full flex justify-center items-center basis-3/12'>
                <CurrencyFormat value={volume} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
        </div>
   </NavLink>
  )
}

export default TokensListItem
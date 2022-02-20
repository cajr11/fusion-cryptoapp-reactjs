import React from 'react';
import CurrencyFormat from 'react-currency-format';

const TokensListItem = ({ name, rank, volume, market, icon, price, change, symbol}) => {
    const isNegative = parseFloat(change) < 0 ? true : false;

  return (
    <div className='h-16 border border-x-0 border-t-0 border-b-gray-600 flex items-center justify-center text-stone-300 tokenlist-item cursor-pointer'>
        <div className='h-full flex justify-center items-center basis-1/12'>{rank}</div>
        <div className='h-full flex flex-col justify-center items-center basis-2/12'>
            <img src={icon} alt="token logo" className='h-5 w-5 object-cover rounded-full mb-1'/>
            <p>
                <span className='hidden md:inline-block md:mr-1'>{name}</span>
                <span>{symbol}</span>
            </p>
        </div>
        <div className='h-full flex justify-center items-center basis-2/12'>
            <CurrencyFormat value={parseFloat(price).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </div>
        <div className={`${!isNegative ? "text-green-600" : "text-red-600"} h-full flex justify-center items-center basis-1/12`}>{change.split("-").join("")}%</div>
        <div className='h-full flex justify-center items-center basis-3/12'>
            <CurrencyFormat value={market} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </div>
        <div className='h-full flex justify-center items-center basis-3/12'>
            <CurrencyFormat value={volume} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </div>
    </div>
  )
}

export default TokensListItem
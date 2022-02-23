import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

const CarouselItem = ({ name, symbol, change, price }) => {
  const isNegative = parseFloat(change) < 0 ? true : false;

  return (
    <div className='h-40 w-36 md:h-44 md:w-52 mr-3 flex flex-col items-center justify-center rounded-md bg-neutral-800'>
        <img src={symbol} alt="coin logo" className='h-16 w-16 object-cover rounded-full'/>
        <h2 className='uppercase font-bold text-stone-300 my-1 text-xs md:text-sm lg:text-base'>{name}</h2>
        <p className='uppercase font-light text-stone-300 my-1'>${parseFloat(price).toFixed(2)}</p>
        <p className={`${!isNegative ? "text-green-600" : "text-red-600"} font-bold flex items-center`}>
          {isNegative && <ChevronDownIcon className='h-4' />}
          {!isNegative && <ChevronUpIcon className='h-4' />}
          {change.split("-").join("")}%
          </p>
    </div>
  )
}

export default CarouselItem
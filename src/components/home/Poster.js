import React from 'react'

const Poster = () => {

  return (
    <div className='learn-blockchain w-full h-64 rounded-md relative md:max-w-lg'>
        <p className='text-stone-300 text-4xl w-56 font-bold absolute top-24 left-4'>LEARN ABOUT
            <span className='text-fuchsia-500'> BLOCKCHAIN</span>
        </p>
        <a className='absolute w-24 h-10 bg-fuchsia-500 flex items-center justify-center rounded-md top-48 left-12 cursor-pointer text-indigo-900 font-bold' href='https://academy.binance.com/en' target="_blank" rel="noreferrer">Learn More</a>
    </div>
  )
}

export default Poster;
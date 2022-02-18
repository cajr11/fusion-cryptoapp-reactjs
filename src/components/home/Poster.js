import React from 'react'

const Poster = () => {

  return (

    // poster bg image is in a custom class in index styles
    <div className='learn-blockchain w-full h-64 rounded-md relative md:w-6/12 lg:h-72 border border-gray-600'>
        <p className='text-stone-300 text-4xl w-56 font-bold absolute top-24 left-6'>LEARN ABOUT
            <span className='text-yellow-700'> BLOCKCHAIN</span>
        </p>
        <a className='absolute w-24 h-10 bg-yellow-700 flex items-center justify-center rounded-md top-48 left-16 cursor-pointer text-stone-300 font-bold' href='https://academy.binance.com/en' target="_blank" rel="noreferrer">Learn More</a>
    </div>
  )
}

export default Poster;
import React from 'react'

const TokensPagination = () => {
  return (
    <div className='w-full h-14 border flex flex-col items-center mt-2'>
        <div className='w-16 flex justify-between'>
            <button className='border-2 h-7 w-7 rounded-md border-gray-600 bg-neutral-900 text-stone-300'>1</button>
            <button className='border-2 h-7 w-7 rounded-md border-gray-600 bg-neutral-900 text-stone-300'>2</button>
        </div>
    </div>
  )
}

export default TokensPagination
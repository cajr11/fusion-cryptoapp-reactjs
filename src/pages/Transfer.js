import React from 'react'
import Chain from '../components/transfer/Chain'

const Transfer = () => {
  return (
    <div>
        <Chain />

        {/* Tranfer Form */}
        <form className='mt-3 w-11/12 lg:w-9/12 h-96 mx-auto border-2 border-gray-600 bg-neutral-900 flex items-center justify-center rounded-md'>
            <div className='h-4/6 w-9/12 flex flex-col items-center justify-evenly border border-gray-600'>
                <input className='w-8/12 h-1/6 rounded-md' type="number" step="0.1" placeholder='Amount' />
                <input className='w-8/12 h-1/6 rounded-md' type="text" minLength="42" maxLength="42" placeholder='Address' />
            </div>
        </form>
    </div>
  )
}

export default Transfer;
import { ChevronUpIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'

const TokensHeadings = ({ sort }) => {
    const [isAscending, setisAscending] = useState(false);
    
    const changeOrderHandler = () => {
        setisAscending(!isAscending);
    }

    useEffect(() => {
      if(isAscending){
        sort(true)
      } else if(!isAscending) {
        sort(false)
      }
    })

  return (
    <div className='sticky top-0 w-full h-14 bg-neutral-900 z-10 border border-gray-600 border-x-0 flex text-stone-300 px-1 font-bold tokens-text-smaller md:text-sm'>
        <button  className=' h-full flex justify-center items-center basis-1/12'>#{!isAscending ?  <ChevronUpIcon className='h-3 md:4' onClick={changeOrderHandler}/> : <ChevronDownIcon className='h-3 md:4' onClick={changeOrderHandler} />}</button>
        <div className=' h-full flex justify-center items-center basis-2/12'>Name</div>
        <div className=' h-full flex justify-center items-center basis-2/12'>Price</div>
        <div className=' h-full flex justify-center items-center basis-1/12'>24h%</div>
        <div className=' h-full flex justify-center items-center basis-3/12'>Market Cap</div>
        <div className=' h-full flex justify-center items-center basis-3/12'>Volume(24h)</div>
    </div>
  )
}

export default TokensHeadings
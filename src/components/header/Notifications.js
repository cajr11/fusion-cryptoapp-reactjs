import React from 'react'
import { BellIcon } from '@heroicons/react/solid'

const Notifications = () => {
  return (
    <div className='flex items-center cursor-pointer'>
      <div className='relative h-10'>
        <BellIcon className='h-10 text-stone-300'/>
        <span className='absolute bg-red-500 top-0 h-2 w-2 rounded-full right-1'></span>
      </div>
    </div>
  )
}

export default Notifications;
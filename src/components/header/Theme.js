import React, { useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Theme = () => {
    const [dayMode, setDayMode] = useState(true);

    const nightModeHandler = () => {
      setDayMode(false)
    }

    const dayModeHandler = () => {
      setDayMode(true)
    }

  return (
      <div className='flex items-center cursor-pointer'>
        {dayMode && <SunIcon className='h-10 text-stone-300' onClick={nightModeHandler} />}
        {!dayMode && <MoonIcon className='h-9 text-stone-300 rotate-moon' onClick={dayModeHandler} />}
      </div>
    )
}

export default Theme
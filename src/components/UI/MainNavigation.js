import React, { useState } from 'react';
import { HomeIcon, CurrencyDollarIcon, SwitchHorizontalIcon, ClockIcon, FolderOpenIcon } from '@heroicons/react/outline'
import { FireIcon } from '@heroicons/react/solid';

const MainNavigation = () => {
    const [selectedIcon, setSelectedIcon] = useState("Home")

  return (
    <nav className='flex absolute bottom-0 w-full bg-neutral-900 rounded-lg text-stone-300'>

        {/* App Logo - display only md screens and up */}
        <div className='hidden'>
            <FireIcon className='h-5'/>
        </div>
        
        {/* Main nav links */}
        <ul className='flex justify-evenly items-center w-full h-16 px-2'>
            <li className={`h-10 w-12 flex items-center justify-center rounded-md ${selectedIcon === "Home" ? "bg-neutral-700" : ""}`} onClick={() => setSelectedIcon("Home") }>
                <HomeIcon className='h-7 stroke-thin'/>
            </li>

            <li className={`h-10 w-12 flex items-center justify-center rounded-md ${selectedIcon === "Tokens" ? "bg-neutral-700" : ""}`} onClick={() => setSelectedIcon("Tokens")} >
                <CurrencyDollarIcon className='h-7 stroke-thin' />
            </li>

            <li className={`h-10 w-12 flex items-center justify-center rounded-md ${selectedIcon === "Swap" ? "bg-neutral-700" : ""}`} onClick={() => setSelectedIcon("Swap")}>
                <SwitchHorizontalIcon className='h-7 stroke-thin' />
            </li>

            <li className={`h-10 w-12 flex items-center justify-center rounded-md ${selectedIcon === "Watchlist" ? "bg-neutral-700" : ""}`} onClick={() => setSelectedIcon("Watchlist")}>
                <ClockIcon className='h-7 stroke-thin' />
            </li>

            <li className={`h-10 w-12 flex items-center justify-center rounded-md ${selectedIcon === "Wallet" ? "bg-neutral-700" : ""}`} onClick={() => setSelectedIcon("Wallet")}>
                <FolderOpenIcon className='h-7 stroke-thin' />
            </li>
        </ul>
    </nav>
  )
}

export default MainNavigation
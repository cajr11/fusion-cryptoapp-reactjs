import React from 'react';
import { FireIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import SearchBar from '../header/SearchBar';
import SignOut from '../header/SignOut';


const Header = () => {
  return (
    <header className='fixed z-10 w-full h-20 bg-neutral-900 md:h-28 flex items-center justify-between px-5 md:px-1 md:static'>
        <div className='flex w-full justify-between md:w-11/12 md:mx-auto'>
          <div className='flex items-center space-x-2 md:-ml-5 lg:-ml-8'>
              <FireIcon className='h-10 text-yellow-700 cursor-pointer' />
              <h1 className='hidden text-stone-300 font-bold text-lg md:inline-block'>FUSION</h1>
          </div>

          <div className='relative mx-5 h-12 rounded-md md:w-96'>
            <SearchBar />
            <SearchIcon className='absolute h-5 top-3 right-2 .stroke-thin'/>
          </div>

          <div className='w-24 flex items-center mr-10'>
            <SignOut />
          </div>
        </div>
    </header>
  )
}

export default Header;
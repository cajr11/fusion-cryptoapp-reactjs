import React from 'react';
import { FireIcon, BellIcon, SunIcon, EmojiHappyIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import SearchBar from '../header/SearchBar';
import Notifications from '../header/Notifications';
import Theme from '../header/Theme';
import Profile from '../header/Profile';


const Header = () => {
  return (
    <header className='w-full h-20 bg-neutral-900 md:h-28 flex items-center justify-between px-5 md:px-1'>
        <div className='flex w-full justify-between md:w-11/12  md:mx-auto'>
          <div className='flex items-center space-x-1'>
              <FireIcon className='h-10 text-yellow-700' />
              <h1 className='hidden text-stone-300 font-bold md:inline-block'>FUSION</h1>
          </div>

          <div className='relative mx-5 w-96 h-12 rounded-md md:w-96'>
            <SearchBar />
            <SearchIcon className='absolute h-5 top-3 right-2 .stroke-thin'/>
          </div>

          <div className='w-44 flex justify-between'>
            <Notifications icon={<BellIcon className='h-5' />} />
            <Theme icon={<SunIcon className='h-5' />} />
            <Profile icon={<EmojiHappyIcon className='h-5' />}/>
          </div>
        </div>
    </header>
  )
}

export default Header;
import { EmojiHappyIcon } from '@heroicons/react/solid';
import React from 'react';

const Profile = ({ icon }) => {
  return (
    <div className='h-10 w-10 border rounded-full flex items-center text-stone-300 cursor-pointer'>
      <EmojiHappyIcon className='h-10' />
    </div>
  )
}

export default Profile
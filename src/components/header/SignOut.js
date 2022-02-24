import { EmojiHappyIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const SignOut = ({ icon }) => {
  const ctx = useContext(AuthContext)

  return (
    <div className='h-10 max-w-full border rounded-full flex items-center text-stone-300 cursor-pointer' onClick={ctx.onLogout}>
      <span className='mx-1'>{ctx.accAddress}</span>
      <EmojiHappyIcon className='h-10' />
    </div>
  )
}

export default SignOut
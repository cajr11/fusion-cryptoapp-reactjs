import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import ConnectWallet from '../UI/ConnectWallet';

const SignOut = () => {
  const ctx = useContext(AuthContext);

  if(!ctx.accAddress){
    return <ConnectWallet />
  }

  return (
    <div className='h-10 max-w-full rounded-md bg-yellow-700 flex items-center text-stone-300 cursor-pointer' onClick={ctx.onLogout}>
      <span className='mx-1'>{ctx.accAddress}</span>
    </div>
  )
}

export default SignOut
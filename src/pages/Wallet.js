import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../store/auth-context';
import ConnectWallet from '../components/UI/ConnectWallet';
import ErrorModal from '../components/UI/ErrorModal';
import SuccessModal from '../components/UI/SuccessModal';

const Wallet = () => {
    const [isError, setIsError] = useState(false)
    const ctx = useContext(AuthContext);

    
        const closeModalHandler = () => {
            setIsError(false);
        }
      
        if (!ctx.isLoggedIn) {
            return (
               <>
                <div className='h-96 flex items-center justify-center'>
                    <ConnectWallet />
                </div>
                {isError && <ErrorModal err={isError} onCloseModal={closeModalHandler} />}
               </>
            )
        }


        if (ctx.isLoggedIn){
            return (
                <div>
                    Wallet
                </div>
            )
        }
        
}

export default Wallet;
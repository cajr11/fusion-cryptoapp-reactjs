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
        };
    
        useEffect(() => {
            const chainChangedhandler = (chainId) => {
                try{
                    if (chainId !== "0x1" && chainId !== "0x3" && chainId !== "0x38" && chainId !== "0x61"){
                        throw new Error("Network not supported, please connect again");
                    }
                }catch(error){
                    setIsError(error);
                    ctx.onLogout();
                }
            }
    
            if(window.ethereum){
                window.ethereum.on("chainChanged", chainChangedhandler)
            }
            
            return () => {
                window.ethereum.removeListener("chainChanged", chainChangedhandler)
            }
        }, [ctx])
    
    
    
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
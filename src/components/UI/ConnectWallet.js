import React,  { useContext, useState } from 'react';
import { ethers } from "ethers";
import AuthContext from '../../store/auth-context';
import ErrorModal from './ErrorModal';

const ConnectWallet = () => {
    const ctx = useContext(AuthContext);
    const [isError, setIsError] = useState(false);
    const [btnActive, setBtnActive] = useState(true);


    const closeModalHandler = () => {
        setIsError(false)
    }

    const connectWalletHandler = async () => {
        setBtnActive(false)
        try {
            if(window.ethereum){
                 // A Web3Provider wraps a standard Web3 provider, which is what MetaMask injects as window.ethereum into each page
                 const provider = new ethers.providers.Web3Provider(window.ethereum)

                 // Request permission to conncect to user's accounts
                 await provider.send("eth_requestAccounts", []);
 
                // Reprompts user to connect even while connected, in case of wrong network
                 await window.ethereum.request({
                    method: 'wallet_requestPermissions',
                    params: [{
                      eth_accounts: {},
                    }]
                  });

                  ctx.getAddress(await window.ethereum.selectedAddress.slice(0, 5) + "..." + window.ethereum.selectedAddress.slice(37,42));
 
                 setBtnActive(true);
                 ctx.onLogin();
            } else{
                throw new Error("Please install MetaMask!")
            }
            
        } catch(error) {
            setBtnActive(true);
            setIsError(error)
        }
       
    }

    return (
        <>
            <div className='mt-3 mx-auto w-11/12 h-96 flex items-center justify-center'>
                <button className={`w-40 h-16 rounded-md bg-neutral-900 font-bold text-stone-300 ${btnActive ? "" : "cursor-not-allowed"}`} onClick={connectWalletHandler} disabled={!btnActive}>
                    Connect Wallet
                </button>
            </div>

            <ErrorModal err={isError} onCloseModal={closeModalHandler} />
        </>
    )
}

export default ConnectWallet;
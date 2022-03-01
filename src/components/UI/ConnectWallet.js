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
                  ctx.getAddressFull(await window.ethereum.selectedAddress);

                  const balance = await window.ethereum.request({
                    method: "eth_getBalance",
                    params: [await window.ethereum.selectedAddress, "latest"]
                  })

                  ctx.getBalance(ethers.utils.formatEther(await balance))
 
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
            <div className='w-12/12 flex items-center justify-center'>
                <button className={`w-32 h-10 rounded-md text-xs bg-yellow-700 font-bold text-stone-300 ${btnActive ? "" : "cursor-not-allowed"}`} onClick={connectWalletHandler} disabled={!btnActive}>
                    Connect Wallet
                </button>
            </div>

            <ErrorModal err={isError} onCloseModal={closeModalHandler} />
        </>
    )
}

export default ConnectWallet;
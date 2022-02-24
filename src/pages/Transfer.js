import React, { useContext, useEffect, useState } from 'react'
import Chain from '../components/transfer/Chain'
import AuthContext from '../store/auth-context';
import ConnectWallet from '../components/UI/ConnectWallet';
import ErrorModal from '../components/UI/ErrorModal';
import { ethers } from 'ethers';

const Transfer = () => {
    const [amount, setAmount] = useState("");
    const [destinationAddress, setDestinationAddress] = useState("");
    const [isError, setIsError] = useState(false)
    const [txError, setTxError] = useState();
    const [txs, setTxs] = useState([]);
    const ctx = useContext(AuthContext);

    const makePayment = async (e) => {
        e.preventDefault();
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner();
            ethers.utils.getAddress(destinationAddress);
            const tx = await signer.sendTransaction({
                to: destinationAddress,

                // convert to wei
                value: ethers.utils.parseEther(amount),
            })
            setTxs([tx])
            setAmount("");
            setDestinationAddress("");
        } catch(error){
            setTxError(error)
            console.log(error);
        }
    }

    const closeModalHandler = () => {
        setIsError(false);
    };


    const destinationAddressHandler = (e) => {
        setDestinationAddress(e.target.value);
    }

    const amountHandler = (e) => {
        setAmount(e.target.value);
    }

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
            <ConnectWallet />
            {isError && <ErrorModal err={isError} onCloseModal={closeModalHandler} />}
           </>
        )
    }
    

    if (ctx.isLoggedIn) {
            return (
            <div>
                <Chain />

                {/* Tranfer Form */}
                <form className='mt-3 w-11/12 lg:w-9/12 h-96 mx-auto border-2 border-gray-600 bg-neutral-900 flex items-center justify-center rounded-md'>
                    <div className='h-4/6 w-9/12 flex flex-col items-center justify-evenly border-2 border-gray-600'>
                        <input className='w-8/12 h-1/6 rounded-md placeholder-neutral-600 pl-3' type="number" step="0.1" placeholder='Amount' value={amount} onChange={amountHandler} />
                        <input className='w-8/12 h-1/6 rounded-md placeholder-neutral-600 pl-3' type="text" placeholder='Account Address' value={destinationAddress} onChange={destinationAddressHandler} />
                        <button className='h-14 w-28 bg-gray-600 rounded-md font-bold text-stone-300' onClick={makePayment}>Send</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Transfer;
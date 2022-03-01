import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../store/auth-context';
import ConnectWallet from '../components/UI/ConnectWallet';
import ErrorModal from '../components/UI/ErrorModal';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';


const db = database;

const Wallet = () => {
    const [isError, setIsError] = useState(false)
    const ctx = useContext(AuthContext);
    const [txs, setTxs] = useState(null)

     // firebase object keys always in uppercase, so wallet address needs formatting
    const formattedAddress = ctx.addressFull.split("").map(char => {
        return typeof(char) === "string" ? char.toUpperCase() : char;
    }).join("");

        useEffect(() => {
            // Query db using user's wallet address
            const usersRef = ref(db, 'users/' + formattedAddress);

           
            onValue(usersRef, (snapshot) => {
                const data = snapshot.val();
                if (data !== null){
                    console.log(data); 

                    // turn tx entries into an array of tx data without complicated firebase keys
                    const formattedTxs = Object.values(data).map( (value) => value)
                    console.log(formattedTxs);
                    setTxs(formattedTxs);
                }
            }); 
        }, [ctx.addressFull, formattedAddress])

    
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
                <div className='w-full mx-auto flex flex-col items-center'>

                    {/* User balance and address */}
                    <div className='w-11/12 h-24 border flex flex-col pl-3 mt-3 bg-neutral-900 rounded-md border-gray-600 md:wallet-details'>
                        <h1 className='mt-3 font-bold text-lg text-yellow-700'>Address: 
                            <span className='text-sm font-normal text-stone-300'> {ctx.addressFull}</span>
                        </h1>

                        <h2 className='mt-3 font-bold text-lg text-yellow-700'>Balance: 
                            <span className='text-sm font-normal text-stone-300'> {ctx.balance}</span>
                        </h2>
                    </div>

                    <h3 className='w-11/12 mt-10 underline text-center text-stone-300 font-bold text-xl md:text-2xl'>Transactions</h3>

                    {/* Transactions */}
                    <div className='w-11/12 border border-gray-600 bg-neutral-900 mt-3 flex flex-col items-center py-5 md:flex-row  md:flex-wrap md:justify-center mb-4'>
                        {txs !== null && txs.map((tx, i) => (
                            <div key={i} className='border-2 border-gray-600 h-44 w-96 rounded-md m-2 flex flex-col pl-3 pt-5 space-y-4 text-stone-300 bg-neutral-800 transaction-details'>
                            <p className='font-bold'>From: {tx.from}</p>
                            <p className='font-bold'>To: {tx.to}</p>
                            <p className='font-bold'>Amount: {tx.amount}</p>   
                            <p className='font-bold'>Date: {tx.date}</p> 
                        </div>
                        ))}
                    </div>
                </div>
            )
        }
        
}

export default Wallet;
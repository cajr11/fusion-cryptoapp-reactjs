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

        useEffect(() => {
            const usersRef = ref(db, "xxxxxx");

            console.log(usersRef);

            onValue(usersRef, (snapshot) => {
                const data = snapshot.val();
                console.log(data);
            })

            // usersRef.on("value", (snapshot) => {
            //     console.log(snapshot.val);
            // })

            // return () => {
            //     usersRef.off();
            // }
        })

    
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
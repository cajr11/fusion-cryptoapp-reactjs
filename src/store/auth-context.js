import React, { useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => {},
    onLogout: () => {},
    accAddress: "",
    addressFull: "",
    getAddress: () => {},
    getBalance: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [accAddress, setAccAddress] = useState("");
    const [addressFull, setAddressFull] = useState("");
    const [balance, setBalance] = useState("")

    const loginHandler = () => {
        setisLoggedIn(true);
        localStorage.setItem("loggedIn", "1")
    }

    const logoutHandler = () => {
        setAccAddress("")
        setisLoggedIn(false);
        localStorage.removeItem("loggedIn")
    }

    const getAddressHandler = (address) => {
        setAccAddress(address);
    }

    const getAddressFullHandler = (address) => {
        setAddressFull(address)
    }

    const getBalanceHandler = (balance) => {
        setBalance(balance);
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler,
            accAddress: accAddress,
            addressFull: addressFull,
            getAddress: getAddressHandler,
            getAddressFull: getAddressFullHandler,
            getBalance: getBalanceHandler,
            balance: balance
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;

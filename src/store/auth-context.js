import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => {},
    onLogout: () => {},
    accAddress: "-",
    getAddress: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [accAddress, setAccAddress] = useState("-")

    useEffect(() => {
        if (localStorage.getItem("loggedIn")){
            setisLoggedIn(true)
        }
    }, [])

    const loginHandler = () => {
        setisLoggedIn(true);
        localStorage.setItem("loggedIn", "1")
    }

    const logoutHandler = () => {
        setAccAddress("-")
        setisLoggedIn(false);
        localStorage.removeItem("loggedIn")
    }

    const getAddressHandler = (address) => {
        setAccAddress(address);
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler,
            accAddress: accAddress,
            getAddress: getAddressHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;

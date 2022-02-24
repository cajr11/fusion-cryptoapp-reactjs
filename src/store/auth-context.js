import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => {},
    onLogout: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

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
        window.ethereum.on('disconnect', ()=>{
            console.log("disconnected");
        });
        setisLoggedIn(false);
        localStorage.removeItem("loggedIn")
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;

import React, { useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => {},
    onLogout: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const loginHandler = () => {
        setisLoggedIn(true);
    }

    const logoutHandler = () => {
        setisLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>{props.children}</AuthContext.Provider>
    )
}


export default AuthContext;

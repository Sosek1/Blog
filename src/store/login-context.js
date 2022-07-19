import React, {createContext, useState} from "react";

const LoginContext = React.createContext({
    isLoggedIn: false,
    loginScreen:false,
    onLogin: () => {},
    onLogout: () => {},
    onLoggedIn: () => {}
});

export const LoginContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginScreen, setLoginScreen] = useState(false);
    

    const loginHandler = () => {
        setLoginScreen(true);
    }

    const logoutHandler = () => {
        setLoginScreen(false);
    }

    const loggedInHandler = () => {
        setIsLoggedIn(true);
    }


    return(
        <LoginContext.Provider 
        value={{
            isLoggedIn,
            loginScreen,
            onLogin: loginHandler,
            onLogout: logoutHandler,
            onLoggedIn: loggedInHandler
        }}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default LoginContext;

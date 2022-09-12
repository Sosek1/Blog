import React, { useState } from "react";

const LoginContext = React.createContext({
    isLoggedIn: false,
    loginScreen:false,
    onLoginScreen: () => {},
    onLoggedIn: () => {}
});

export const LoginContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginScreen, setLoginScreen] = useState(false);
    
    const loggedInHandler = (value) => {
        setIsLoggedIn(value);
    }

    const loginScreenHandler = (value) => {
        setLoginScreen(value);
    }

    return(
        <LoginContext.Provider 
        value={{
            isLoggedIn,
            loginScreen,
            onLoginScreen: loginScreenHandler,
            onLoggedIn: loggedInHandler
        }}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default LoginContext;

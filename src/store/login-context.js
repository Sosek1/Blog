import React, {createContext, useState} from "react";

const LoginContext = React.createContext({
    isLoggedIn: false,
    loginScreen:false,
    onLogin: () => {},
    onGoBack: () => {}
});

export const LoginContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginScreen, setLoginScreen] = useState(false);

    const loginHandler = () =>{
        setLoginScreen(true);
    }

    const goBackHandler = () => {
        setLoginScreen(false);
    }

    return(
        <LoginContext.Provider 
        value={{
            isLoggedIn,
            loginScreen,
            onLogin: loginHandler,
            onGoBack: goBackHandler
        }}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default LoginContext;

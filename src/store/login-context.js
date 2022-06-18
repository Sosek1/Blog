import React, { useState} from "react";

const LoginContext = React.createContext({
    isLoggedIn: false,
    loginScreen:false,
    onLogin: () => {},
});

export const LoginContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginScreen, setLoginScreen] = useState(false);

    const loginHandler = () =>{
        console.log("click")
    }

    return(
        <LoginContext.Provider 
        value={{
            isLoggedIn: isLoggedIn,
            loginScreen: loginScreen,
            onLogin:loginHandler
        }}>
            {props.chlidren}
        </LoginContext.Provider>
    );
};

export default LoginContext;

import React, {useContext} from "react";
import LoginContext from "../../store/login-context";
const Topbar = () => {
    const loginCtx = useContext(LoginContext);

    return (
    <>
    <div className="h-[60px] bg-light-900 ml-[20px] mr-[20px] flex items-center justify-between">
        <div className="flex flex-row">
            <p className="font-sans text-h2-mobile font-h2-mobile text-dark/100 mr-[10px]">Sosek</p>
            <p className="font-sans text-h2-mobile font-h2-mobile text-blue/700">Blog</p>
        </div>
        {!loginCtx.isLoggedIn && <div className="flex flex-row">
            <p className="font-sans text-h3-mobile font-h3-mobile text-dark/100" onClick={()=>loginCtx.onLogin()}>Log in</p>
        </div>}
        {!loginCtx.isLoggedIn && loginCtx.loginScreen && <div className="flex flex-row">
            <p className="font-sans text-h3-mobile font-h3-mobile text-dark/100">Go back</p>
        </div>}
        {loginCtx.isLoggedIn && <div className="flex flex-row">
            <p className="font-sans text-h3-mobile font-h3-mobile text-dark/100">Log out</p>
        </div>}
    </div>
    </>
    )
}

export default Topbar;
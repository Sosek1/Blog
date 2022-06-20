import React, {useContext, useState} from "react";
import useInput from "../../hooks/use-input";
import Topbar from "../UI/Topbar";

const Login = () => {

    const loginValidation = (login) => {
        const loginPattern = /^[A-Z]([a-zA-Z0-9]){5,8}$/;
        return loginPattern.test(login)  
    }

    const passwordValidation = (password) => {
        const passwordPattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;
        return passwordPattern.test(password)
    }

    const {
        value: enteredLogin,
        isTouched: loginIsTouched,
        isLeft:loginIsLeft,
        isValid: enteredLoginIsValid,
        hasError: loginHasError,
        valueChangeHandler: loginChangeHandler,
        inputTouchedHandler: loginTouchedHandler,
        inputLeftHandler: loginLeftHandler,
        reset: resetLoginInput
    } = useInput(loginValidation);

    const {
        value: enteredPassword,
        isTouched: passwordIsTouched,
        isLeft:passwordIsLeft,
        isValid: enteredPasswordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputTouchedHandler: passwordTouchedHandler,
        inputLeftHandler: passwordLeftHandler,
        reset: resetpasswordInput
    } = useInput(passwordValidation);

    let formIsValid = false;

    if(enteredLoginIsValid && enteredPasswordIsValid){
        formIsValid = true;
    }


    const sumbitFormHandler = (event) => {
        event.preventDefault();
        if(!enteredLoginIsValid){
            return;
        }
        if(!enteredPasswordIsValid){
            return;
        }
        console.log(enteredLogin);
        console.log(enteredPassword);
        resetLoginInput('');
        resetpasswordInput('');
    }

    const buttonStyles = formIsValid 
    ? "h-[40px] w-auto mt-[30px] mb-[30px] rounded-[10px] bg-blue/700 text-h4-mobile font-h4-mobile text-light/900" 
    : "h-[40px] w-auto mt-[30px] mb-[30px] rounded-[10px] bg-dark/500 text-h4-mobile font-h4-mobile text-light/900";

    const loginInputStyles = !loginIsTouched
    ? "w-[100%] mb-[20px] text-h4-mobile font-h4-mobile text-dark/300 border-b border-dark/500 focus:outline-none focus:border-dark/500 placeholder-dark/500"
    : (loginHasError 
        ? "w-[100%] mb-[20px] text-h4-mobile font-h4-mobile text-dark/300 border-b border-error focus:outline-none placeholder-dark/500"
        :"w-[100%] mb-[20px] text-h4-mobile font-h4-mobile text-dark/300 border-b border-blue/700 focus:outline-none placeholder-dark/500");

    const passwordInputStyles = !passwordIsTouched
    ? "w-[100%] mb-[20px] text-h4-mobile font-h4-mobile text-dark/300 border-b border-dark/500 focus:outline-none focus:border-dark/500 placeholder-dark/500"
    : (passwordHasError 
        ? "w-[100%] mb-[20px] text-h4-mobile font-h4-mobile text-dark/300 border-b border-error focus:outline-none placeholder-dark/500"
        :"w-[100%] mb-[20px] text-h4-mobile font-h4-mobile text-dark/300 border-b border-blue/700 focus:outline-none placeholder-dark/500");


    return (
    <>
    <Topbar />
    <form onSubmit={sumbitFormHandler} className="custom-width h-auto absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] p-[20px] bg-light/900 custom-box-shadow rounded-lg flex flex-col content-between">
        <div>
            <h1 className="mt-[20px] mb-[20px] text-h3-mobile font-h1-mobile text-dark/300">Manage your blog!</h1>
            <p className="mb-[20px] text-p-mobile font-h4-mobile text-dark/500">Admin panel gives you posibility to add new articles, assign them category, edit or delete them.</p>
        </div>
        <div>
            <input type="text" id="loign" onChange={loginChangeHandler} onBlur={loginLeftHandler} onInput={loginTouchedHandler} value={enteredLogin} placeholder="Login" className={loginInputStyles}></input>
            {loginHasError && loginIsLeft && <p className="text-p-mobile font-p-mobile text-error">Login should start with capital letter, do not contain whitespace and special characters and have 5-8 characters.</p>}
        </div>
        <div>
        <input type="text" id="password" onChange={passwordChangeHandler} onBlur={passwordLeftHandler} onInput={passwordTouchedHandler} value={enteredPassword} placeholder="Password" className={passwordInputStyles}></input>
            {passwordHasError && passwordIsLeft && <p className="text-p-mobile font-p-mobile text-error">Password should not contain whitespace and have at least 6 characters.</p>}
        </div>
        <button className={buttonStyles}>Start managing</button>
    </form>
    </>
    )
}

export default Login;


import React, {useContext} from "react";
import LoginContext from "./store/login-context";
import Topbar from "../UI/Topbar";

const Login = () => {
    return (
    <>
    <Topbar />
    <form>
        <div>
            <p></p>
        </div>
        <div>
            <label>Login</label>
            <input></input>
        </div>
        <div>
            <label>Hasło</label>
            <input></input>
        </div>
        
    </form>
    </>
    )
}

export default Login;
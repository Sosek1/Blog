import React, {useContext} from "react";
import LoginContext from "./store/login-context";
import AdminArticles from "./components/Admin/AdminArticles";
import Homepage from "./components/Homepage/HomePage";
import Login from "./components/Login/Login";

function App() {
  const loginCtx = useContext(LoginContext);
  return (
    <>
      {!loginCtx.isLoggedIn && !loginCtx.loginScreen && <Homepage />}
      {!loginCtx.isLoggedIn && loginCtx.loginScreen && <Login/>}
      {loginCtx.isLoggedIn && !loginCtx.loginScreen && <AdminArticles/>}
    </>
  );
}

export default App;

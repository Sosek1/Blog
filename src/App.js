import React, {useContext, useState, useEffect, useCallback} from "react";
import LoginContext from "./store/login-context";
import Articles from "./components/Admin/ArticlesDashboard/Articles";
import Homepage from "./components/Homepage/HomePage";
import LoginForm from "./components/Login/LoginForm";
import Upload from "./components/Admin/ArticlesUpload/Upload";
import ArticlesContext from "./store/articles-context";

function App() {
  const loginCtx = useContext(LoginContext);
  const articlesCtx = useContext(ArticlesContext);

  return (
    <>
      {/* {!loginCtx.isLoggedIn && !loginCtx.loginScreen && <Homepage />}
      {!loginCtx.isLoggedIn && loginCtx.loginScreen && <LoginForm/>} */}
      <Upload/>
      <Articles/>
        
        
    </>
  );
}

export default App;

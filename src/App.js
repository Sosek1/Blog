import React, {useContext} from "react";
import AdminArticles from "./components/Admin/AdminArticles";
import Homepage from "./components/Homepage/HomePage";
// import LoginContext from "./store/login-context";
import { LoginContextProvider } from "./store/login-context";

function App() {
  return (
      <Homepage />
  );
}

export default App;

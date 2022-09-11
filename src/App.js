import {Route} from 'react-router-dom';
import Articles from "./components/Admin/ArticlesDashboard/Articles";
import LoginForm from "./components/Login/LoginForm";
import Upload from "./components/Admin/ArticlesUpload/Upload";
import ArticlesEditForm from './components/Admin/ArticlesDashboard/ArticlesEditForm';
import Homepage from './components/Homepage/HomePage';


function App() {
  return (
    <>
    <Route path="/Homepage">
      <Homepage/>
    </Route>
    <Route path="/Login">
      <LoginForm/>
    </Route>
    <Route path="/Upload">
      <Upload/>
    </Route>
    <Route path="/Articles">
      <Articles/>
    </Route>  
    <Route path="/Edit">
      <ArticlesEditForm/>
    </Route>
    </>
  );
}

export default App;

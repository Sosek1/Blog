import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { LoginContextProvider } from "./store/login-context";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LoginContextProvider> 
);


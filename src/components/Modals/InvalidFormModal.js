import ReactDOM from "react-dom";
import { useModals } from "../../store/articles-context";
import { ArticlesContextProvider } from "../../store/articles-context";
import { ThemeProvider } from '@mui/system';
import {theme} from "../UI/theme";
import FmdBadIcon from '@mui/icons-material/FmdBad';

const InvalidFormModal = () => {
    const modalsCtx = useModals();

    if(!modalsCtx.invalidFormModal){
        return;
    }

    return ReactDOM.createPortal(
        <ArticlesContextProvider>
        <div className="w-[250px] h-[250px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-50 flex flex-col justify-between items-center bg-light/900 custom-box-shadow rounded-lg">
            <ThemeProvider theme={theme}>
                <FmdBadIcon color="blue" style={{fontSize:100}} className="mt-[20px]"/>
            </ThemeProvider>
            <p className="font-sans text-center text-h4-mobile font-h4-mobile text-dark/300">Please make sure that all inputs are filled</p>
            <button onClick={() => modalsCtx.onShowInvalidModal(false)} className="mb-[20px] w-[100px] h-[40px] bg-blue/700 text-h4-mobile text-light/900 rounded-lg">Continue</button>
        </div></ArticlesContextProvider>, document.body)
}

export default InvalidFormModal;
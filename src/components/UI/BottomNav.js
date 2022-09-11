import {NavLink} from 'react-router-dom';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ThemeProvider } from '@mui/system';
import {theme} from "./theme";

const BottomNav = () => {
    return(
        <nav>
            <ul className="h-[70px] w-[100%] flex flex-row justify-between bg-blue/700 rounded-t-3xl">
            <ThemeProvider theme={theme}>
                <li className="w-[33%] h-[100%] flex flex-col justify-center items-center">
                    <DescriptionOutlinedIcon color="primary"/>
                    <NavLink to="/Articles" activeClassName="border-light/900" className="mt-[5px] ont-sans text-p-mobile font-p-mobile text-light/900  border-b-[3px] border-blue/700">Articles</NavLink>
                </li>
                <li className="w-[33%] h-[100%] flex flex-col justify-center items-center">
                    <FileUploadOutlinedIcon color="primary"/>
                    <NavLink to="/Upload" activeClassName=" border-light/900" className="mt-[5px] ont-sans text-p-mobile font-p-mobile text-light/900 border-b-[3px] border-blue/700">Upload</NavLink>
                </li>
                <li className="w-[33%] h-[100%] flex flex-col justify-center items-center">
                    <SettingsOutlinedIcon color="primary"/>
                    <NavLink to="/Settings" activeClassName="border-light/900" className="mt-[5px] ont-sans text-p-mobile font-p-mobile text-light/900 border-b-[3px] border-blue/700">Settings</NavLink>
                </li>
            </ThemeProvider>
            </ul>
        </nav>
    )
}

export default BottomNav;
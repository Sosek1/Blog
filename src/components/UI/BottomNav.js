import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ThemeProvider } from '@mui/system';
import {theme} from "./theme";

const BottomNav = () => {
    return(
        <nav className="h-[70px] w-[100%] sticky bottom-0 flex flex-row justify-between bg-blue/700 rounded-t-3xl">
            <ThemeProvider theme={theme}>
                <div className="w-[33%] h-[100%] flex flex-col justify-center items-center">
                    <DescriptionOutlinedIcon color="primary"/>
                    <p className="mt-[5px] ont-sans text-p-mobile font-p-mobile text-light/900">Articles</p>
                </div>
                <div className="w-[33%] h-[100%] flex flex-col justify-center items-center">
                    <FileUploadOutlinedIcon color="primary"/>
                    <p className="mt-[5px] ont-sans text-p-mobile font-p-mobile text-light/900">Upload</p>
                </div>
                <div className="w-[33%] h-[100%] flex flex-col justify-center items-center">
                    <SettingsOutlinedIcon color="primary"/>
                    <p className="mt-[5px] ont-sans text-p-mobile font-p-mobile text-light/900">Settings</p>
                </div>
            </ThemeProvider>
        </nav>
    )
}

export default BottomNav;
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ThemeProvider } from '@mui/system';
import {theme} from "./theme";

const SearchBar = () => {
    return (
        <div className="custom-width ml-[20px] mb-[20px] pr-[10px] pl-[10px] flex flex-row justify-between custom-box-shadow rounded-[10px]">
            <input className="h-[40px] w-[90%] bg-light/900 font-sans text-h4-mobile font-h4-mobile text-dark/100 focus:outline-none placeholder-dark/500" placeholder="Search..."></input>
            <div className="flex items-center justify-center">
                <ThemeProvider theme={theme}>
                    <SearchOutlinedIcon color="blue"/>
                </ThemeProvider>
            </div>
        </div>
    )
}   

export default SearchBar;
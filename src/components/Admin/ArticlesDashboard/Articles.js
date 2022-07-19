import BottomNav from "../../UI/BottomNav";
import Topbar from "../../UI/Topbar"
import ArticlesList from "./ArticlesList";
import SearchBar from "../../UI/SearchBar";
import { ArticlesContextProvider } from "../../../store/articles-context";
import DeleteModal from "../../UI/DeleteModal";
import Overlay from "../../UI/Overlay";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { ThemeProvider } from '@mui/system';
import {theme} from "../../UI/theme";
import InformationModal from "../../UI/InformationModal";

const Articles = () => {
    return(
        <ArticlesContextProvider>
            <div className="min-h-[100vh]">
                <Topbar />
                <h1 className="font-sans text-h3-mobile font-h4-mobile text-dark/300 ml-[20px] mt-[20px] mb-[20px]">Articles</h1>
                <SearchBar />
                <section className="custom-width ml-[20px] flex flex-row justify-between">
                    <h2 className="font-sans text-h4-mobile font-h4-mobile text-dark/500">Articles list</h2>
                    <ThemeProvider theme={theme}>
                        <div className="flex items-center justify-between">
                            <h3 className="font-sans text-h4-mobile font-h4-mobile text-dark/500">Filter</h3>
                            <FilterAltOutlinedIcon color="lightGrey"/>
                        </div>
                        
                    </ThemeProvider>
                </section>
                <ArticlesList/>
                <DeleteModal/>
                <InformationModal/>
                <Overlay/>
                <BottomNav />
            </div>
        </ArticlesContextProvider>
    )
}

export default Articles;
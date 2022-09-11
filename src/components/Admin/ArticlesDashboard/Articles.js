import { useState} from "react";
import { ArticlesContextProvider } from "../../../store/articles-context";
import BottomNav from "../../UI/BottomNav";
import Topbar from "../../UI/Topbar";
import ArticlesList from "./ArticlesList";
import SearchBar from "../../UI/SearchBar";
import Overlay from "../../UI/Overlay";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { ThemeProvider } from '@mui/system';
import {theme} from "../../UI/theme";
import InformationModal from "./InformationModal";
import DeleteModal from "./DeleteModal";
import ArticlesFilter from "./ArticlesFilter";

const Articles = () => {
    const [showFilter, setShowFilter] = useState(false);

    return(
        <ArticlesContextProvider>
            <div className="h-[100vh] flex justify-between flex-col">
                <Topbar />
                <div className="h-[100%] overflow-scroll">
                    <h1 className="font-sans text-h3-mobile font-h4-mobile text-dark/300 ml-[20px] mt-[20px] mb-[20px]">Articles</h1>
                    <SearchBar/>
                    <section className="custom-width ml-[20px] flex flex-row justify-between">
                        <h2 className="font-sans text-h4-mobile font-h4-mobile text-dark/500">Articles list</h2>
                        <ThemeProvider theme={theme} >
                            <div onClick={()=>setShowFilter(!showFilter)} className="flex items-center justify-between">
                                <h3 className="font-sans text-h4-mobile font-h4-mobile text-dark/500">Filter</h3>
                                <FilterAltOutlinedIcon color={showFilter ? "blue" : "lightGrey"}/>
                            </div>
                        </ThemeProvider>
                    </section>
                    {showFilter && <ArticlesFilter/>}
                    <ArticlesList/>
                    <DeleteModal/>
                    <InformationModal/>
                    <Overlay/>
                </div>
                <BottomNav />
            </div>
        </ArticlesContextProvider>
    )
}

export default Articles;
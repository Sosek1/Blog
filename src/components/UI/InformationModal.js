import ReactDOM from "react-dom";
import React, { useContext } from "react";
import ArticlesContext from "../../store/articles-context";
import useFetch from "../../hooks/use-fetch";
import { ArticlesContextProvider } from "../../store/articles-context";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ThemeProvider } from '@mui/system';
import {theme} from "./theme";

const InformationModal = () => {

    const articlesCtx = useContext(ArticlesContext);

    if(!articlesCtx.infoModal){
        return;
    }

    console.log(articlesCtx.categories)

    const getArticlesIndex = () => {
        for (const i in articlesCtx.articles){
            if(articlesCtx.articles[i].id===articlesCtx.clickedArticle){
                return i
            }
        }
    }

    return ReactDOM.createPortal(
        <ArticlesContextProvider>
        <div className="custom-width  absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-50 flex flex-col  items-start bg-light/900 custom-box-shadow rounded-lg">
            <div className="flex justify-between items-center ml-[20px] mt-[20px] mb-[20px]">
                <ThemeProvider theme={theme}>
                    <InfoOutlinedIcon color="blue" style={{fontSize:30}}/>
                </ThemeProvider>
                <h1 className="ml-[20px] font-sans text-h4-mobile font-h4-mobile text-dark/300">Information</h1>
            </div>
            <ul className="custom-width  ml-[20px] mr-[20px] mb-[20px] flex flex-col gap-[10px] rounded-lg custom-box-shadow">
                <li className="custom-width ml-[20px] mr-[20px] mt-[20px] p-[5px] flex items-center rounded-lg custom-box-shadow">
                    <p className="font-sans text-h4-mobile font-h3-mobile text-dark/100">Title:</p>
                    <p className="ml-[5px] font-sans text-h4-mobile font-h4-mobile text-dark/300">{articlesCtx.articles[getArticlesIndex()].title}</p>
                </li>
                <li className="custom-width ml-[20px] mr-[20px] mt-[20px] p-[5px] flex items-center rounded-lg custom-box-shadow">
                    <p className="font-sans text-h4-mobile font-h3-mobile text-dark/100">Subtitle:</p>
                    <p className="ml-[5px] font-sans text-h4-mobile font-h4-mobile text-dark/300">{articlesCtx.articles[getArticlesIndex()].subtitle}</p>
                </li>
                <li className="custom-width ml-[20px] mr-[20px] mt-[20px] p-[5px] flex items-center rounded-lg custom-box-shadow">
                    <p className="font-sans text-h4-mobile font-h3-mobile text-dark/100">Author: </p>
                    <p className="ml-[5px] font-sans text-h4-mobile font-h4-mobile text-dark/300">{articlesCtx.articles[getArticlesIndex()].author}</p>
                </li>
                <li className="custom-width ml-[20px] mr-[20px] mt-[20px] p-[5px] flex items-center rounded-lg custom-box-shadow">
                    <p className="font-sans text-h4-mobile font-h3-mobile text-dark/100">Category:</p>
                    <ul className="ml-[5px] flex gap-[5px] flex-wrap">{articlesCtx.articles[getArticlesIndex()].categories.map((category,index)=>(<li key={index} className="font-sans text-p-mobile font-p-mobile text-dark/300">{category}</li>))}</ul>
                </li>
                <li className="custom-width ml-[20px] mr-[20px] mt-[20px] p-[5px] flex items-center rounded-lg custom-box-shadow">
                    <p className="font-sans text-h4-mobile font-h3-mobile text-dark/100">Date:</p>
                    <p className="ml-[5px] font-sans text-h4-mobile font-h4-mobile text-dark/300">{articlesCtx.articles[getArticlesIndex()].date}</p>
                </li>
            </ul>
            
        </div></ArticlesContextProvider>, document.body);
}

export default InformationModal;
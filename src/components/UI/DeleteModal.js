import ReactDOM from "react-dom";
import React, { useContext } from "react";
import ArticlesContext from "../../store/articles-context";
import { ArticlesContextProvider } from "../../store/articles-context";
import useFetch from "../../hooks/use-fetch";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { ThemeProvider } from '@mui/system';
import {theme} from "./theme";


const DeleteModal = (props) => {

    const{
        fetchHandler:fetchArticlesHandler
    } = useFetch();

    const articlesCtx = useContext(ArticlesContext);

    const deleteArticleHandler = async (id) => {
        const respone = await fetch(`https://sosek-blog-default-rtdb.europe-west1.firebasedatabase.app/User1/Articles/${id}.json`,{
            method:'DELETE',
            body: JSON.stringify(),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        fetchArticlesHandler();
        articlesCtx.onShowDeleteModal(false);  
    }

    
    if(!articlesCtx.deleteModal){
        return;
    }

    return ReactDOM.createPortal(
        <ArticlesContextProvider>
        <div className="w-[250px] h-[250px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-50 flex flex-col justify-between items-center bg-light/900 custom-box-shadow rounded-lg">
            <ThemeProvider theme={theme}>
                <DeleteForeverOutlinedIcon color="blue" style={{fontSize:100}} className="mt-[20px]"/>
            </ThemeProvider>
            <p className="font-sans text-h4-mobile font-h4-mobile text-dark/300">Are you sure?</p>
            <button onClick={() => deleteArticleHandler(articlesCtx.clickedArticle)} className="mb-[20px] w-[100px] h-[40px] bg-blue/700 text-h4-mobile text-light/900 rounded-lg">Delete</button>
        </div></ArticlesContextProvider>, document.body);
};

export default DeleteModal;
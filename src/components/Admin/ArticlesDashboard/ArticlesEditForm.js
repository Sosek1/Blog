import { useEffect, useState, useContext} from "react";
import useFetch from "../../../hooks/use-fetch";
import CategoryList from "../ArticlesUpload/CategoryList";
import ArticlesContext from "../../../store/articles-context";
import Topbar from "../../UI/Topbar";
import BottomNav from "../../UI/BottomNav";

const isEmpty = value => value.trim() === '';

const ArticlesEditForm = () => {
   
    const articlesCtx = useContext(ArticlesContext);

    // const getArticlesIndex = () => {
    //     for (const i in articlesCtx.articles){
    //         if(articlesCtx.articles[i].id===articlesCtx.clickedArticle){
    //             return i
    //         }
    //     }
    // }

    // const [updateTitle, setUpdateTitle] = useState(`${articlesCtx.articles[getArticlesIndex].title}`);
    // const [updateTitle, setUpdateTitle] = useState(`${articlesCtx.articles[articlesCtx.clickedArticleIndex].title}`);
    const [updateTitle, setUpdateTitle] = useState("")
    const [updateSubtitle, setUpdateSubtitle] = useState("");
    const [updateAuthor, setUpdateAuthor] = useState("");
    const [updateArticle, setUpdateArticle] = useState("");

    const {
        fetchHandler: fetchArticlesHandler
     } = useFetch();

     useEffect(()=>{
        fetchArticlesHandler();
    },[fetchArticlesHandler]);

    const updateTitleChangeHandler = (event) => {
        setUpdateTitle(event.target.value);
    }
    const updateSubtitleChangeHandler = (event) => {
        setUpdateSubtitle(event.target.value);
    }
    const updateAuthorChangeHandler = (event) => {
        setUpdateAuthor(event.target.value);
    }
    const updateArticleChangeHandler = (event) => {
        setUpdateArticle(event.target.value);
    }

    const updateArticleHandler = async (article) => {
        const response = await fetch(`https://blog-ef31e-default-rtdb.europe-west1.firebasedatabase.app/Articles/${articlesCtx.clickedArticle}.json`,{
            method: 'PATCH',
            body: JSON.stringify(article),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
    }

    const submitFormHandler = (event) => {
        event.preventDefault();

        const articleData = {
            title:updateTitle,
            subtitle:updateSubtitle,
            author:updateAuthor,
            categories: articlesCtx.categories,
            article:updateArticle
        }

        updateArticleHandler(articleData);
       

        setUpdateTitle("");
        setUpdateSubtitle("");
        setUpdateAuthor("");
        setUpdateArticle("");

    }   

    return (
        
        <div className="h-[100vh] flex justify-between flex-col">
            <Topbar/>
            <div className="h-[100%] overflow-scroll">
                <form onSubmit={submitFormHandler} className="flex flex-col  items-start bg-light/900 custom-box-shadow rounded-lg">
                    <label className="mt-[20px] ml-[20px] mb-[20px] font-sans text-h4-mobile font-h4-mobile text-dark/500">Title</label>
                    <input type="text" id="title" onChange={updateTitleChangeHandler} value={updateTitle} className="custom-width h-[40px] p-[5px] mb-[20px] ml-[20px] text-p-mobile text-dark/100 font-h4-mobile bg-light/900 custom-box-shadow rounded-lg focus:outline-none" placeholder="Enter the title"></input>
                    <label className="ml-[20px] mb-[20px] font-sans text-h4-mobile font-h4-mobile text-dark/500">Subtitle</label>
                    <input type="text" id="subtitle" onChange={updateSubtitleChangeHandler} value={updateSubtitle}  className="custom-width h-[40px] p-[5px] mb-[20px] ml-[20px] text-p-mobile text-dark/100 font-h4-mobile bg-light/900 custom-box-shadow rounded-lg focus:outline-none" placeholder="Enter the subtitle"></input>
                    <label className="ml-[20px] mb-[20px] font-sans text-h4-mobile font-h4-mobile text-dark/500">Author</label>
                    <input type="text" id="subtitle" onChange={updateAuthorChangeHandler} value={updateAuthor}  className="custom-width h-[40px] p-[5px] mb-[20px] ml-[20px] text-p-mobile text-dark/100 font-h4-mobile bg-light/900 custom-box-shadow rounded-lg focus:outline-none" placeholder="Enter the subtitle"></input>
                    <label className="ml-[20px] mb-[20px] font-sans text-h4-mobile font-h4-mobile text-dark/500">Category</label>
                    <CategoryList />
                    <label className="ml-[20px] mb-[20px] font-sans text-h4-mobile font-h4-mobile text-dark/500">Article's content</label>
                    <textarea id="article" name="article" onChange={updateArticleChangeHandler} value={updateArticle} className="custom-width min-h-[200px] mb-[20px] ml-[20px] p-[5px] focus:outline-none border-2 border-blue/700 rounded-lg" placeholder="text"></textarea>
                    <button className="h-[40px] custom-width ml-[20px] mb-[20px] text-h4-mobile font-h4-mobile text-light/900 bg-blue/700 rounded-lg">Upload an article</button>
                </form>
            </div>
            <BottomNav/>
        </div>
        
    )
}

export default ArticlesEditForm;
import { useState, useContext, useEffect} from "react";
import AuthorsList from "./AuthorsList";
import CategoryList from "./CategoryList";
import useFetch from "../../../hooks/use-fetch";
import useInput from "../../../hooks/use-input";
import ArticlesContext from "../../../store/articles-context";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { ThemeProvider } from '@mui/system';
import {theme} from "../../UI/theme";

const isEmpty = value => value.trim() === '';

const UploadForm = (props) => {

    const {
        fetchHandler: fetchArticlesHandler
     } = useFetch();

     const {
        value: titleValue,
        valueChangeHandler: titleChangeHandler,
        isValid: titleIsValid,
        reset: titleReset
     } = useInput(isEmpty);

     const {
        value: subtitleValue,
        valueChangeHandler: subtitleChangeHandler,
        isValid: subtitleIsValid,
        reset: subtitleReset
     } = useInput(isEmpty);


     const {
        value: authorValue,
        valueChangeHandler: authorChangeHandler,
        valueClickHandler: authorClickHandler,
        isValid: authorIsValid,
        reset: authorReset
     } = useInput(isEmpty);

     const {
        value:articleValue,
        valueChangeHandler:articleChangeHandler,
        isValid:articleIsValid,
        reset:articleReset
     } = useInput(isEmpty);

     useEffect(()=>{
         fetchArticlesHandler();
     },[fetchArticlesHandler]);

    const articlesCtx = useContext(ArticlesContext);

    const addArticleHandler = async (article) => {
        const response = await fetch('https://blog-ef31e-default-rtdb.europe-west1.firebasedatabase.app/Articles.json',{
            method: 'POST',
            body: JSON.stringify(article),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
    }

    const addAuthorHandler = async (author) => {
        const response = await fetch('https://blog-ef31e-default-rtdb.europe-west1.firebasedatabase.app/Authors.json',{
            method: 'POST',
            body: JSON.stringify(author),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
    }

    const [showAuthorsList, setshowAuthorsList] = useState(false);

    const repeatedAuthor = (currentAuthor) => {
        for(let i = 0; i < articlesCtx.authors.length; i++){
            if(currentAuthor === articlesCtx.authors[i].name){
                return false;
            }
        }
        return true;
    }

    const authorsListHandler = () => {
        setshowAuthorsList(!showAuthorsList)
    }


    const submitFormHandler = (event) => {
        event.preventDefault();

        console.log(subtitleIsValid)

        // if(!titleIsValid){
        //     return;
        // }
        // if(!subtitleIsValid){
        //     return;
        // }
        // if(!authorIsValid){
        //     return;
        // }
        // if(!articleIsValid){
        //     return;
        // }

        const articleData = {
            title:titleValue,
            subtitle:subtitleValue,
            author:authorValue,
            categories: articlesCtx.categories,
            article:articleValue
        }

        const authorData = {
            name:authorValue
        }

        addArticleHandler(articleData);
        
        if(repeatedAuthor(authorValue)){
            addAuthorHandler(authorData);
        } 

        titleReset('');
        subtitleReset('');
        authorReset('');
        articleReset('');
    }


    return (
        <>
            <form onSubmit={submitFormHandler} className="flex flex-col  justify-between">
                <label className="ml-[20px] mb-[20px] font-sans text-h4-mobile font-h4-mobile text-dark/500">Title</label>
                <input type="text" id="title" onChange={titleChangeHandler} value={titleValue} className="custom-width h-[40px] p-[5px] mb-[20px] ml-[20px] text-p-mobile text-dark/100 font-h4-mobile bg-light/900 custom-box-shadow rounded-lg focus:outline-none" placeholder="Enter the title"></input>
                <label className="ml-[20px] mb-[20px] font-sans text-h4-mobile font-h4-mobile text-dark/500">Subtitle</label>
                <input type="text" id="subtitle" onChange={subtitleChangeHandler} value={subtitleValue}  className="custom-width h-[40px] p-[5px] mb-[20px] ml-[20px] text-p-mobile text-dark/100 font-h4-mobile bg-light/900 custom-box-shadow rounded-lg focus:outline-none" placeholder="Enter the subtitle"></input>
                <label className="ml-[20px] mb-[20px] font-sans text-h4-mobile font-h4-mobile text-dark/500">Author</label>
                <div className="custom-width p-[5px] mb-[20px] ml-[20px] flex flex-wrap items-center justify-between custom-box-shadow rounded-lg">
                    <input type="text" id="author" value={authorValue} onChange={authorChangeHandler} className="h-[30px] basis-4/5 text-p-mobile text-dark/100 font-h4-mobile bg-light/900  focus:outline-none" placeholder="Choose or enter an author"></input>
                    <ThemeProvider theme={theme}>
                        {!showAuthorsList && <KeyboardArrowDownOutlinedIcon color="secondary" onClick={authorsListHandler} />}
                        {showAuthorsList && <KeyboardArrowUpOutlinedIcon color="secondary" onClick={authorsListHandler}/>}
                    </ThemeProvider>
                    {showAuthorsList && <AuthorsList authorsName={authorClickHandler} authorsList={authorsListHandler}/>}
                </div>
                <label className="ml-[20px] mb-[20px] font-sans text-h4-mobile font-h4-mobile text-dark/500">Category</label>
                <CategoryList />
                <label className="ml-[20px] mb-[20px] font-sans text-h4-mobile font-h4-mobile text-dark/500">Article's content</label>
                <textarea id="article" name="article" onChange={articleChangeHandler} value={articleValue} className="custom-width min-h-[300px] mb-[20px] ml-[20px] p-[5px] focus:outline-none border-2 border-blue/700 rounded-lg" placeholder="text"></textarea>
                <button className="h-[40px] custom-width ml-[20px] mb-[20px] text-h4-mobile font-h4-mobile text-light/900 bg-blue/700 rounded-lg">Upload an article</button>
            </form>
        </>
    )
}

export default UploadForm;
import React, { useState} from 'react';

const ArticlesContext = React.createContext({
    articles:[],
    authors:[],
    categories:[],
    error:false,
    isLoading:false,
    clickedArticle: null,
    clickedArticleIndex:null,
    onAddArticles:()=>{},
    onAddAuthors:()=>[],
    onAddCategories:()=>[],
    onDeleteArticle:()=>{}, 
    onClickArticle:()=>{},
    onClickArticleIndex:()=>{},
    onLoading:()=>{},
    onError:()=>{},

    deleteModal: false,
    infoModal: false,
    onShowDeleteModal:()=>{},
    onShowInfoModal:()=>{},
});

export const ArticlesContextProvider = (props) => {
    const [articles, setArticles] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [clickedArticle, setClickedArticle] = useState(null);
    const [clickedArticleIndex, setClickedArticleIndex] = useState(null);

    const [deleteModal, setShowDeleteModal] = useState(false);
    const [infoModal, setShowInfoModal] = useState(false);

    const addArticleHandler = (articleData) => {
        setArticles(articleData);
    }

    const addAuthorHandler = (currentAuthor) => {
        setAuthors(currentAuthor);
    }

    const addCategoriesHandler = (categories) => {
        setCategories(categories);
    }

    const deleteArticleHandler = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    }

    const errorHandler = (value) => {
        setError(value);
    }

    const isLoadingHandler = (value) => {
        setLoading(value);
    }

    const clickArticleHandler = (id) => {
        setClickedArticle(id);
    }

    const clickArticleIndexHandler = (id) => { 
            for (const i in articles){
                if(articles[i].id===clickedArticle){
                    setClickedArticleIndex(i)
                }
            }   
    }

    const deleteModalHandler = (show) => {
        setShowDeleteModal(show);
    }

    const infoModalHander = (show) => {
        setShowInfoModal(show)  ;
    }

    return(
        <ArticlesContext.Provider value={{
            articles,
            authors,
            categories,
            error,
            isLoading,
            clickedArticle,
            clickedArticleIndex,
            deleteModal,
            infoModal,
            onAddArticles: addArticleHandler,
            onAddAuthors:addAuthorHandler,
            onAddCategories: addCategoriesHandler,
            onDeleteArticle: deleteArticleHandler,
            onError: errorHandler,
            onLoading: isLoadingHandler,
            onClickArticle: clickArticleHandler,
            onClickArticleIndex:clickArticleIndexHandler,
            onShowDeleteModal: deleteModalHandler,
            onShowInfoModal: infoModalHander,
        }}>
            {props.children}
        </ArticlesContext.Provider>
    )
}

export default ArticlesContext;
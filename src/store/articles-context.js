import React, {useState, useContext} from 'react';

export const ArticlesContext = React.createContext({
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
});

export const ModalsContext = React.createContext({
    deleteModal: false,
    infoModal: false,
    invalidFormModal:false,
    onShowDeleteModal:()=>{},
    onShowInfoModal:()=>{},
    onShowInvalidModal:()=>{}
})

export const useArticles = () => {
    return useContext(ArticlesContext)
}

export const useModals = () => {
    return useContext(ModalsContext)
}

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
    const [invalidFormModal, setInvalidFormModal] = useState(false);

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
        setShowInfoModal(show);
    }

    const invalidFormHandler = (show) => {
        setInvalidFormModal(show);
    }

    return(
        <ArticlesContext.Provider value={{articles,
            authors,
            categories,
            error,
            isLoading,
            clickedArticle,
            clickedArticleIndex,
            onAddArticles: addArticleHandler,
            onAddAuthors:addAuthorHandler,
            onAddCategories: addCategoriesHandler,
            onDeleteArticle: deleteArticleHandler,
            onError: errorHandler,
            onLoading: isLoadingHandler,
            onClickArticle: clickArticleHandler,
            onClickArticleIndex:clickArticleIndexHandler,
           }}>
            <ModalsContext.Provider value={{ 
                deleteModal,
                infoModal, 
                invalidFormModal,
                onShowDeleteModal: deleteModalHandler,
                onShowInfoModal: infoModalHander,
                onShowInvalidModal:invalidFormHandler
                }}>
                {props.children}
            </ModalsContext.Provider>
        </ArticlesContext.Provider>
    )
}
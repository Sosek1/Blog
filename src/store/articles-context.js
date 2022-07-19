import React, {useState} from 'react'

const ArticlesContext = React.createContext({
    articles:[],
    authors:[],
    categories:[],
    isLoading:false,
    clickedArticle: null,
    deleteModal: false,
    infoModal: false,
    uploadModal:false,
    onAddArticles:()=>{},
    onAddAuthors:()=>[],
    onAddCategories:()=>[],
    onClickArticle:()=>{},
    onShowDeleteModal:()=>{},
    onShowInfoModal:()=>{},
    onShowUploadModal:()=>{},
    onDeleteArticle:()=>{},
    onLoading:()=>{},
    onError:()=>{}
})

export const ArticlesContextProvider = (props) => {
    const [articles, setArticles] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [clickedArticle, setClickedArticle] = useState(null);
    const [deleteModal, setShowDeleteModal] = useState(false);
    const [infoModal, setShowInfoModal] = useState(false);
    const [uploadModal, setShowUploadModal] = useState(false);

    const addArticleHandler = (articleData) => {
        setArticles(articleData);
    }

    const addAuthorHandler = (currentAuthor) => {
        setAuthors(currentAuthor);
    }
    

    const addCategoriesHandler = (categories) => {
        setCategories(categories);
    }

    // console.log(categories)

    const deleteArticleHandler = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    }

    const clickArticleHandler = (id) => {
        setClickedArticle(id);
    }
    
    const deleteModalHandler = (show) => {
        setShowDeleteModal(show);
    }

    const  infoModalHander = (show) => {
        setShowInfoModal(show)  
    }

    const  uploadModalHander = (show) => {
        setShowUploadModal(show)  
    }

    const isLoadingHandler = (value) => {
        setLoading(value);
    }

    const errorHandler = (value) => {
        setError(value);
    }

    return(
        <ArticlesContext.Provider value={{
            articles,
            authors,
            categories,
            isLoading,
            clickedArticle,
            deleteModal,
            infoModal,
            uploadModal,
            onAddArticles: addArticleHandler,
            onAddAuthors:addAuthorHandler,
            onAddCategories: addCategoriesHandler,
            onClickArticle: clickArticleHandler,
            onShowDeleteModal: deleteModalHandler,
            onShowInfoModal: infoModalHander,
            onShowUploadModal: uploadModalHander,
            onDeleteArticle: deleteArticleHandler,
            onLoading: isLoadingHandler,
            onError: errorHandler,
        }}>
            {props.children}
        </ArticlesContext.Provider>
    )
}

export default ArticlesContext;
import { useEffect, useContext } from "react";
import Article from "./Article";
import ArticlesContext from "../../../store/articles-context";
import useFetch from "../../../hooks/use-fetch";

const ArticlesList = () => {
    const {
       fetchHandler: fetchArticlesHandler
    } = useFetch();
    
    const articlesCtx = useContext(ArticlesContext);

    useEffect(()=>{
        fetchArticlesHandler();
    },[fetchArticlesHandler]);


    const articleIdHandler = (id) => {
        articlesCtx.onClickArticle(id);
        articlesCtx.onClickArticleIndex(id);
    }

    const infoModalHandler = () => {
        articlesCtx.onShowInfoModal(true);
    }

    const deleteModalHandler = () => {
        articlesCtx.onShowDeleteModal(true);
    }

    return (
        <ul className="custom-width mt-[20px] ml-[20px] p-[10px] flex flex-col gap-[10px] itmes-center custom-box-shadow rounded-[10px]">
            {articlesCtx.articles.map(article=>(
                <Article key={article.id} title={article.title} articleId={()=>articleIdHandler(article.id)} onInfo={infoModalHandler} onDelete={deleteModalHandler}/>
            ))}
           {articlesCtx.isLoading && <p>Is loading</p>}
        </ul>
    )
}

export default ArticlesList
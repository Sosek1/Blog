import {useCallback, useContext} from 'react';
import ArticlesContext from '../store/articles-context';

const useFetch = () => {
    const articlesCtx = useContext(ArticlesContext)
    
    const fetchArticlesHandler = useCallback(async () => {
        articlesCtx.onLoading(true);
        articlesCtx.onError(false);

        try{
            const response = await fetch('https://blog-ef31e-default-rtdb.europe-west1.firebasedatabase.app/Articles.json');
            
            if(!response.ok){
                return new Error("Something went wrong!");
            }

            const data = await response.json();
           
            const loadedArticles = [];
            for(const key in data){
                loadedArticles.push({
                    id:key,
                    title:data[key].title,
                    subtitle:data[key].subtitle,
                    author:data[key].author,
                    categories:data[key].categories,
                    article:data[key].article,
                    date:data[key].date
                })
            }

            articlesCtx.onAddArticles(loadedArticles);
        }catch(error){
            articlesCtx.onError(error.message);
        }
        articlesCtx.onLoading(false);
    },[])

    return {
        fetchHandler:fetchArticlesHandler
    }
}

export default useFetch;
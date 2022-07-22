import {useState, useEffect, useContext, useCallback} from 'react'
import ArticlesContext from "../../../store/articles-context";

const AuthorsList = (props) => {
    const articlesCtx = useContext(ArticlesContext);

    const fetchAuthorsHandler = useCallback(async () => {
        try{
            const response = await fetch('https://blog-ef31e-default-rtdb.europe-west1.firebasedatabase.app/Authors.json');
            
            if (!response.ok){
                return new Error("Something went wrong!");
            }

            const data = await response.json();

            const loadedAuthors = []
            for(const key in data){
                loadedAuthors.push({
                    id:key,
                    name:data[key].name
                })
            }

            articlesCtx.onAddAuthors(loadedAuthors);
        }catch(error){
            articlesCtx.onError(error.message)
        }
    },[])

    useEffect(()=>{
        fetchAuthorsHandler();
    },[fetchAuthorsHandler])

    return (
        <ul className="h-auto basis-[100%]">
            {articlesCtx.authors.map(author=>(
                <li onClick={() => {props.authorsName(author.name);props.authorsList();}} key={author.id} className="mb-[10px] first:mt-[10px] font-sans text-p-mobile font-p-mobile text-dark/300">{author.name}</li>
            ))}
        </ul>
    )

}

export default AuthorsList;
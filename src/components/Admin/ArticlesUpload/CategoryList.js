import { useState, useContext } from "react";
import ArticlesContext from "../../../store/articles-context";

const CategoryList = (props) => {

    const articlesCtx = useContext(ArticlesContext);

    // const categories = ["#Crypto", "#Finance", "#News", "#Problems", "#Startups", "#Blockchain"];
    const [crypto, setCrypto] = useState(false);
    const [finance, setFinance] = useState(false);
    const [news, setNews] = useState(false);
    const [problems, setProblems] = useState(false);
    const [startups, setStartups] = useState(false);
    const [blockchain, setBlockchain] = useState(false);
    const choosenCategories = [];
   
    const categoriesSwitch = {
        '#Crypto': () => {setCrypto(!crypto)},
        '#Finance': () => {setFinance(!finance)},
        '#News': () => {setNews(!news)},
        '#Problems': () => {setProblems(!problems)},
        "#Startups": () => {setStartups(!startups)},
        "#Blockchain": () => {setBlockchain(!blockchain)} 
    }

    const categoryHandler = (category) => {
        categoriesSwitch[category]();  
        articlesCtx.onAddCategories(choosenCategories); 
    }
    
    if(crypto){
        choosenCategories.push("#Crypto");
    }else{
        choosenCategories.filter((item)=>{return item == "#Crypto "})
    }

    if(finance){
        choosenCategories.push("#Finance");
    }else{
        choosenCategories.filter((item)=>{return item == "#Finance "})
    }

    if(news){
        choosenCategories.push("#News");
    }else{
        choosenCategories.filter((item)=>{return item == "#News "})
    }

    if(problems){
        choosenCategories.push("#Problems");
    }else{
        choosenCategories.filter((item)=>{return item == "#Problems "})
    }

    if(startups){
        choosenCategories.push("#Startups");
    }else{
        choosenCategories.filter((item)=>{return item == "#Startups "})
    }

    if(blockchain){
        choosenCategories.push("#Blockchain");
    }else{
        choosenCategories.filter((item)=>{return item == "#Blockchain "})
    }

    // console.log(choosenCategories)

    // const categoryHandler = (category, state) => {
    //     console.log(state)
    //     categoriesSwitch[category]();  
    //     choosenCategoriesHandler(category, state)
    // }

    // const choosenCategoriesHandler = (category, categoryState) => {
    //     if(categoryState){
    //         choosenCategories.push(category);
    //     }else{
    //         choosenCategories.filter((item)=>{return item == category})
    //     }
    // }

   
    
    const defaultStyle = "p-[2px] text-p-mobile font-h3-mobile text-light/900"
    const activeStyle = "p-[2px] text-p-mobile font-h3-mobile text-light/900 border-[1px] border-light/900 rounded-lg"


    return( 
    <ul  className="custom-width h-[40px] p-[5px] mb-[20px] ml-[20px] flex items-center justify-between gap-5 overflow-x-auto overflow-y scroll bg-blue/700 rounded-lg">
        <li onClick={() => categoryHandler("#Crypto",{crypto})} className={crypto ? activeStyle : defaultStyle}>#Crypto</li>
        <li onClick={() => categoryHandler("#Finance",{finance})} className={finance ? activeStyle : defaultStyle}>#Finance</li>
        <li onClick={() => categoryHandler("#News",{news})} className={news ? activeStyle : defaultStyle}>News</li>
        <li onClick={() => categoryHandler("#Problems",{problems})} className={problems ? activeStyle : defaultStyle}>Problems</li>
        <li onClick={() => categoryHandler("#Startups",{startups})} className={startups ? activeStyle : defaultStyle}>Startups</li>
        <li onClick={() => categoryHandler("#Blockchain",{blockchain})} className={blockchain ? activeStyle : defaultStyle}>Blockchain</li>
        {/* {categories.map((category, index) => (
            <li onClick={() => categoryHandler(category)} key={index} className={}>{category}</li>
        ))} */}
    </ul>
    )
} 

export default CategoryList;
//conditionally and dynamicly change items style and render items
//deleteand replace if else statments
//categories are being added and removed form chooseCategories normally but for some reasone they are delayed for one click in categories state in articles-context
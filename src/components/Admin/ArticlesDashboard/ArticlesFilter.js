import {useState} from "react";

const ArticlesFilter = () => {
    const [newest, setNewest] = useState(false);
    const [oldest, setOldest] = useState(false);
    const [alphabetically, setAlphabetically] = useState(false);

    const dotStyles = "h-[10px] w-[10px] mr-[5px] flex items-center justify-center rounded-full";

    return(
        <div className="min-h-[70px] custom-width ml-[20px] mt-[20px] flex flex-col justify-around rounded custom-box-shadow">
            <h2 className="p-[5px] font-sans text-p-mobile font-h3-mobile text-dark/500">Sortuj według</h2>
            <ul>
                <li onClick={()=>{setNewest(true);setOldest(false);setAlphabetically(false)}} className="flex flex-row justify-between items-center">
                    <h3 className="p-[5px] font-sans text-p-mobile font-h3-mobile text-dark/300">Od najnowszych</h3>
                    <div className={newest ? dotStyles + " bg-blue/700" : dotStyles}></div>
                </li>
                <li onClick={()=>{setNewest(false);setOldest(true);setAlphabetically(false)}} className="flex flex-row justify-between items-center">
                    <h3 className="p-[5px] font-sans text-p-mobile font-h3-mobile text-dark/300">Od najstarszych</h3>
                    <div className={oldest ? dotStyles + " bg-blue/700" : dotStyles}></div>
                </li>
                <li onClick={()=>{setNewest(false);setOldest(false);setAlphabetically(true)}} className="flex flex-row justify-between items-center">
                    <h3 className="p-[5px] font-sans text-p-mobile font-h3-mobile text-dark/300">Alfabetycznie</h3>
                    <div className={alphabetically ? dotStyles + " bg-blue/700" : dotStyles}></div>
                </li>
            </ul>
        </div>
    )
}

export default ArticlesFilter
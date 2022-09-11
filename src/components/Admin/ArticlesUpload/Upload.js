import { ArticlesContextProvider } from "../../../store/articles-context";
import BottomNav from "../../UI/BottomNav";
import Topbar from "../../UI/Topbar";
import UploadForm from "./UploadForm";



const Upload = () => {
    return (
        <ArticlesContextProvider>
            <div className="h-[100vh] flex justify-between flex-col">
                <Topbar/>
                <div className="h-[100%] overflow-scroll">
                    <h1 className="font-sans text-h3-mobile font-h4-mobile text-dark/300 ml-[20px] mt-[20px] mb-[20px]">Upload an article</h1>
                    <UploadForm/>
                </div>
                <BottomNav/>
            </div>
        </ArticlesContextProvider>
    )
}

export default Upload;
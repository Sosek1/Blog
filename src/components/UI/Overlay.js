import ReactDOM from "react-dom";
import React,{ useContext } from "react";
import ArticlesContext from "../../store/articles-context";


const Overlay = () => {
    const articlesCtx = useContext(ArticlesContext);

    const hideOverlay = !articlesCtx.infoModal && !articlesCtx.deleteModal && !articlesCtx.uploadModal

    if(hideOverlay){
        return;
    }
   
    const hideOverlayHandler = () => {
        articlesCtx.onShowInfoModal(false);
        articlesCtx.onShowDeleteModal(false);
        articlesCtx.onShowUploadModal(false)
    }

    return ReactDOM.createPortal(<div onClick={hideOverlayHandler} className="h-[100vh] fixed top-0 bottom-0 z-10 left-0 right-0 overlay"></div>,document.body)
}

export default Overlay;
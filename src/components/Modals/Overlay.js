import ReactDOM from "react-dom";
import {useModals} from "../../store/articles-context";


const Overlay = () => {
    const modalsCtx = useModals();
    const hideOverlay = !modalsCtx.infoModal && !modalsCtx.deleteModal && !modalsCtx.invalidFormModal;

    if(hideOverlay){
        return;
    }
   
    const hideOverlayHandler = () => {
        modalsCtx.onShowInfoModal(false);
        modalsCtx.onShowDeleteModal(false);
        modalsCtx.onShowInvalidModal(false);
    }

    return ReactDOM.createPortal(<div onClick={hideOverlayHandler} className="h-[100vh] fixed top-0 bottom-0 z-10 left-0 right-0 overlay"></div>,document.body)
}

export default Overlay;
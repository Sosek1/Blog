import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ThemeProvider } from '@mui/system';
import {theme} from "../../UI/theme";


const Article = (props) => {
    return(
        <li onClick={props.articleId} className="h-[40px] p-[10px]  flex flex-row justify-between items-center rounded custom-box-shadow">
            <p className="w-[70%] font-sans text-p-mobile font-h3-mobile text-dark/300">{props.title}</p>
            <div className="h-[100%] flex flex-row justify-between gap-2">
                <ThemeProvider theme={theme}>
                    <InfoOutlinedIcon onClick={props.onInfo} color="secondary"/>
                    <BorderColorOutlinedIcon color="secondary"/>
                    <DeleteOutlineOutlinedIcon onClick={props.onDelete} color="secondary"/>
                </ThemeProvider>
            </div>
        </li>
    )
}

export default Article;
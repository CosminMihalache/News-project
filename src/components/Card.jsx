import "./Card.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

import {removeFavorite} from"./AddFavorite"
export default function Card(props){
    return(
        
        <div className="card-container col-md-4  mar ">
           <Link className="link" to={`/news/${props.id}`}>
            <img className="img-card" src={props.img} alt="" />
            {props.favorites && <CloseIcon onClick={(e) => {e.preventDefault(); removeFavorite(props.id)}
                } className="btn-remove gg-close"></CloseIcon>}
            <div className="card-body">
            <h1 className="title-card">{props.title}</h1>
            <p className="p-image">{props.description}</p>
            
            </div>
            </Link>
        </div>
    )
}
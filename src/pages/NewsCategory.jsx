import { useParams } from "react-router-dom"
import CardsList from "../components/CardsList"

export default function NewsCategory(){


    const {category}=useParams()
    
    return(<div>
        <CardsList category={category} />
    </div>)
}
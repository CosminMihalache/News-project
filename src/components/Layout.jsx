import Card from "./Card"
import { getNewsCategories } from "../api/urlChange"
import useFetch from "../api/fetch"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Layout.css"
import { Link } from "react-router-dom";



export default function Layout(props){
  console.log(props.category)
    function categoryName(name){
switch (name) {
    case "football":
        return "Fotbal"
        break;
        case "technology":
        return "Tech"
        break;
        case "fashion":
            return "Fashion"
            break;

    default:
        break;
}
    }
    const fetchData = useFetch(getNewsCategories(props.category));
  
    if (!fetchData.loading) {
      const data = fetchData.response;
    
      if (data && data.results) {
     
        const limitedCards = data.results.slice(0,3);
        const limitedCards1=data.results.slice(3, 6)

        return (<div className="layout-grid">
            <h1 className="title-category"> {categoryName(props.category)}</h1>
          <div className=" container cards-cont  ">
            
            <div className="row">
            {limitedCards.map((ob, index) => (
               
              <Card id={ob.id} key={index} title={ob.webTitle} description={ob.fields.bodyText.split(".")[0]} img={ob.fields.thumbnail} />
             
            ))}
            </div>
            <div className="row">
            {limitedCards1.map((ob, index) => (
                
              <Card id={ob.id}  key={index} title={ob.webTitle} description={ob.fields.bodyText.split(".")[0]} img={ob.fields.thumbnail} />
            
            ))}
            </div>
           
          </div>
          <p className="last-p"> Vezi toate știrile legate de tehnologie în secțiunea <Link to={`/category/${props.category}`} >{categoryName(props.category)}</Link></p>
          </div>
        );
      }
    }
  
    return null;
  }

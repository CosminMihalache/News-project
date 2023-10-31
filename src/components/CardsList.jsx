import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from '../api/fetch';
import { getNewsCategories } from '../api/urlChange';
import Card from './Card';
import { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

import "./Layout.css"
import { Link } from 'react-router-dom';
export default function CardsList(props) {
  const [data, setData] = useState([]);
const[num,setNumber]=useState(1)

function titleChance(title){
  switch (title) {
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




  let active = num;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    
    <Pagination.Item onClick={()=>{
      
       window.scrollTo(0, 0);
      setNumber(number) }} key={number} active={number === active}>
      {number}
      
    </Pagination.Item>
  );
}


  useEffect(() => {
    

    fetch(getNewsCategories(props.category,num))
      .then((response) => response.json())
      .then((d) => setData(d));

  }, [props.category,num]);
  

  if (data && data.response) {
    const limitedCards = data.response.results.slice(0,3);
    const limitedCards1 = data.response.results.slice(3,6);
    const limitedCards2 = data.response.results.slice(6,9);
    const limitedCards3 = data.response.results.slice(12,15);
    const limitedCards4 = data.response.results.slice(15,18);
    const limitedCards5 = data.response.results.slice(18,20);
    return (
      <div className="layout-grid">
        <h1 className="title-category">{titleChance(props.category)}</h1>
        <div className="container cards-cont">
          <div className="row">
            {limitedCards.map((ob, index) => (
              <Card id={ob.id} key={index} title={ob.webTitle} description={ob.fields.bodyText.split(".")[0]} img={ob.fields.thumbnail} />
            ))}
          </div>
          <div className="row">
            {limitedCards1.map((ob, index) => (
              <Card id={ob.id} key={index} title={ob.webTitle} description={ob.fields.bodyText.split(".")[0]} img={ob.fields.thumbnail} />
            ))}
          </div>
          <div className="row">
            {limitedCards2.map((ob, index) => (
              <Card id={ob.id} key={index} title={ob.webTitle} description={ob.fields.bodyText.split(".")[0]} img={ob.fields.thumbnail} />
            ))}
          </div>
          <div className="row">
            {limitedCards3.map((ob, index) => (
              <Card id={ob.id} key={index} title={ob.webTitle} description={ob.fields.bodyText.split(".")[0]} img={ob.fields.thumbnail} />
            ))}
          </div>
          <div className="row">
            {limitedCards4.map((ob, index) => (
              <Card id={ob.id} key={index} title={ob.webTitle} description={ob.fields.bodyText.split(".")[0]} img={ob.fields.thumbnail} />
            ))}
          </div>
          <div className="row">
            {limitedCards5.map((ob, index) => (
              <Card id={ob.id} key={index} title={ob.webTitle} description={ob.fields.bodyText.split(".")[0]} img={ob.fields.thumbnail} />
            ))}
          </div>
          <div>
          
    
    
   

  

   
  </div>
        </div>
        <Pagination>{items}</Pagination>
      </div>
    );
  }

  return null;




  
 }
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getNewsDetails } from "../api/urlChange";
import "./NewsDetails.css"
import {addFavorite ,bannerFavorite} from"../components/AddFavorite"
import {changeDateFormat} from "../components/Date"
export default function NewsDetails(props){
let {title,year,mounth,day,category, '*': additionalSegments}=useParams()
console.log(title,additionalSegments)

if(additionalSegments){
  let aux=year
  year=mounth
  mounth=day
  day=title
  title=additionalSegments
  additionalSegments=aux
  
}


console.log(category,year,mounth,day,title,additionalSegments)

const [data,setData]=useState({});
console.log(additionalSegments ? getNewsDetails(category,year,mounth,day,title,additionalSegments) :getNewsDetails(category,year,mounth,day,title))

function insertHtml(ht){
    const newHtml={__html:ht}
    return  newHtml
}

  



    useEffect(()=>{
fetch(additionalSegments ? getNewsDetails(category,year,mounth,day,title,additionalSegments) :getNewsDetails(category,year,mounth,day,title))
.then((respons)=>
    respons.json())
.then(d=>{console.log(d)
     setData(d)})
    },[])



    console.log(data)

let details=data.response?.content.fields
let details2=data.response?.content

console.log(details)
if (!details) {
    return null;
    
  }
  
  const formattedDate = changeDateFormat(details.firstPublicationDate
    );
  return (
    <div className="container1">
<p className="favorite hidden">Succes! Poți vedea știrea accesând secțiunea Favorite</p>
    <div className="container-details">
      <h1>{details.headline}</h1>
      <br />
      <br />
      <div className="p-1" dangerouslySetInnerHTML={insertHtml(details.standfirst)}></div>
      
      
      
      <div dangerouslySetInnerHTML={insertHtml(details.main)}></div>

      
      <div className="container-date">
        <div>
        <h3 className="name">{details.byline}</h3>
        <h2 className="date">{formattedDate}</h2>
        </div>
        <button onClick={()=>{
          bannerFavorite()
          addFavorite({
          id:details2.id,
          img:details.thumbnail,
          title:details2.webTitle,
          description:details2.fields?.bodyText.split(".")[0]
        })
        }}>Adauga la favorite</button>
      </div>
      
      <div dangerouslySetInnerHTML={insertHtml(details.body)}></div>
    </div>
    </div>
  );
}


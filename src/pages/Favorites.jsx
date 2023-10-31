import "./Favorites.css"
import "../components/Card.css"
import Card from "../components/Card"
import { useEffect, useState } from "react"


export default function Favorites(){
    const[arr,setArr]=useState([])

   
    useEffect(() => {
        const storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
        
        
          setArr(storedArray);
      }, [arr]);



console.log(arr)

      



if(arr.length === 0){
    return(<div className="container-favorite">

<h1 className="title-favorite">Știrile tale favorite</h1>
<p className="p-favorite">Momentan nu ai nicio știre favorită.</p>
    </div>
    )}

return(<div className="container-all">
    <h1 className="title-favorite">Știrile tale favorite</h1>
    <div className="container-cards-f">
        
{
    
    arr.map((ob,index)=>(
     
<Card className="card" favorites={true}  id={ob.id}  key={index} title={ob.title} description={ob.description} img={ob.img} />
        
         
    ))
}
    </div></div>
)
    
}
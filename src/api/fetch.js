import { useEffect,useState } from "react";



export default function useFetch(url){
const [data,setData]=useState([]);


    useEffect(()=>{
fetch(url)
.then((respons)=>
    respons.json())
.then(d=> setData(d))
    },[])

return data

}

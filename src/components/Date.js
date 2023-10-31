import { CardTitle } from "react-bootstrap"







export function changeDateFormat(date){
   const[year,mounth,day ]= date.split("T")[0].split("-")

   return`${day}/${mounth}/${year}`

}





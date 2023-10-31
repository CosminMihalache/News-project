


export function addFavorite(ob){
    const storedArray = JSON.parse(localStorage.getItem('myArray')) || []
    
   const state =storedArray.find((el)=>el.id===ob.id)
   console.log(state)
   if(!state){
    storedArray.push(ob)
    localStorage.setItem('myArray', JSON.stringify(storedArray));
   }
   


}




  
export function removeFavorite(id){
    const storedArray = JSON.parse(localStorage.getItem('myArray')) 
    
  let arr=  storedArray.filter((el) => el.id !== id)
    localStorage.setItem('myArray', JSON.stringify(arr));

}

export function bannerFavorite(){
    document.querySelector(".favorite").classList.remove("hidden")
    setTimeout(()=>{
        document.querySelector(".favorite")?.classList.add("hidden")
    },2000)
    console.log("ceva")
}
const API_KEY='d5580f36-7b7c-4763-90d0-1c5f2c77efcc'



export function getNewsCategories(
    category,
    pageNumber = 1,
    pageSize = 20
  ) {
   
    const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;
  

    return `https://content.guardianapis.com/search${queryParams}`;
  }
  

  export function getNewsDetails(category,year,mounth,day,title, aditional) {

    const queryParams = `?api-key=${API_KEY}&show-fields=all`;
  
  if(!aditional){
    return `https://content.guardianapis.com/${category}/${year}/${mounth}/${day}/${title}?api-key=${API_KEY}&show-fields=all`
  }
  else{
    return `https://content.guardianapis.com/${category}/${aditional}/${year}/${mounth}/${day}/${title}?api-key=${API_KEY}&show-fields=all`
  }
    ;
  }


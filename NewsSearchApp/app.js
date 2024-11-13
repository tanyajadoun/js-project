//here we will be using news api  for fethching news detail for  the search app

const apiKey = 'd323e330fa434c6184add64b05ee3847'; // replace with your api key
const blogContainer=document.querySelector(".block-container");
//\for searching accaording to the query entered by the user
const searchfield=document.querySelector("#search-input");
const searchbtn=document.querySelector("#search-btn");



//for a person viewing the page first time i dont want him to see a black page
//so i will be fetching the news for the first time when the page loads so we will create a function
async function fetchRandomnews() {
    //here we will be using trying and catch as sometimes our website can hol
    //data and sometimes it cannot so thats why
    try {
          //here we are fetching the data from the api we have to 
          //make this url functioning dynamically to show various different news
         const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=20&apiKey=${apiKey}`;
         const response=await fetch(apiUrl);
         const data=await response.json();
         return data.articles;
    }
    catch(error){
        console.error("error fetching random news",error);
        return[];
    }
}



function displayBlogs(articles){
    //here we will be looping through the articles and displaying them on the webpage card
    blogContainer.innerHTML="";

    //here we have created the whole html data from cards where we need to store the data of news fetched by the api
    articles.forEach((article)=>{
            const blogcard=document.createElement("div");
            blogcard.classList.add("blogcard");
            const img=document.createElement("img");
            img.src=article.urlToImage;  //urlToImage is a property of news Api
            img.alt=article.title;
            const title=document.createElement("h2");
            const truncatedTitle=article.title.length>30?article.title.slice(0,30)+"....":article.title;
            title.textContent=truncatedTitle;
            const description=document.createElement("p");
            const truncatedDescription=article.description.length>100?article.description.slice(0,100)+"....":article.description;
            description.textContent=truncatedDescription;

            //to add all the card details in blogcard class of html
            blogcard.appendChild(img);
            blogcard.appendChild(title);
            blogcard.appendChild(description);

            //to add all the card details in blogcontainer class of html
            blogContainer.appendChild(blogcard);

            //when someone clicks on any card then the whole news page opens
            blogcard.addEventListener("click",function(){
                 window.open(article.url,"_opensToPage");

            })
            
    });
}

(async()=>{
    try{
    const articles=await fetchRandomnews();
   displayBlogs(articles);
    }
    catch(error){
        console.error("error fetching random news",error);
    }
})();

searchbtn.addEventListener("click",async()=>{
    const query=searchfield.value.trim();
    if(query!==""){
        try{
            const articles=await fetchNewsQuery(query);
            displayBlogs(articles);
        }
        catch(error){
            console.error("error fetching news by query",error);
        }
    }
})

async function fetchNewsQuery(query){
    
    try {
        //here we are fetching the data from the api we have to 
        //make this url functioning dynamically to show various different news
       const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apiKey}`;
       const response=await fetch(apiUrl);
       const data=await response.json();
       return data.articles;
  }
  catch(error){
      console.error("error fetching random news",error);
      return[];
  }
}
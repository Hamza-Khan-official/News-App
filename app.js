//  [News API_KEY] =  a11348e00c314751857fdfe68f11f9e4 

let news_name = "tesla";




// console.log(API);

let Search = () => {
    let API_KEY = "a11348e00c314751857fdfe68f11f9e4"

    let User_Search = document.getElementById('User_Search');
    console.log(User_Search.value)
    
    // API
    let API = fetch(`https://newsapi.org/v2/everything?q=${User_Search.value}&from=2025-11-17&sortBy=publishedAt&apiKey=${API_KEY}`);
    
    try {
        API
            .then((data) => data.json())
            .then((response) => {
                let looping = response.articles;
                looping.map((elements) => {
                    // console.log(elements);
                    
                    let ShowUI = document.getElementById('ShowUI');
                    ShowUI.innerHTML +=
                    `<div class="card" style="width: 18rem;">
                    <img src="${elements.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card’s content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`
            
            
            
            
        })
        
        
            })
        } catch (error) {
            
            console.log(error);
            
            
        }
    }
    Clear(User_Search);
    
    let Clear = (User_Search)=>{
        User_Search.value = "";
}
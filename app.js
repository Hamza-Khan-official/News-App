// //  [News API_KEY] =  a11348e00c314751857fdfe68f11f9e4 




// // console.log(API);

// let Search = () => {
//     let API_KEY = "a11348e00c314751857fdfe68f11f9e4"

//     let User_Search = document.getElementById('User_Search');
//     console.log(User_Search.value)
    
//     // API
//     let API = fetch(`https://newsapi.org/v2/everything?q=${User_Search.value}&from=2025-11-17&sortBy=publishedAt&apiKey=${API_KEY}`);
    
//     let ShowUI = document.getElementById('ShowUI');       
//     // for looder
//     ShowUI.innerHTML = '<div class="loading" style="text-align: center; padding: 40px; color: #58a6ff;"><h1>Loading...</h1></div>';
    
//     try {
//         API
//             .then((data) => data.json())
//             .then((response) => {
//                 ShowUI.innerHTML = "";
//                 let looping = response.articles;
//                 looping.map((elements) => {
//                     // console.log(elements);
                    
//                     ShowUI.innerHTML +=
//                     `<div class="card" style="width: 18rem;">
//                     <img src="${elements.urlToImage}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
//             card’s content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//             </div>`
            
            
            
            
//         })
        
        
//         Clear(User_Search);
//             })
//         } catch (error) {
            
//             console.log(error);
            
            
//         }
//     }
    
// let Clear_news = (User_Search)=>{
//     console.log("clear function")
//     User_Search.value = "";
// }

let Search = () => {
    let API_KEY = "c3decb47502c488a83fade6e4a88ee97"

    let User_Search = document.getElementById('User_Search');
    console.log(User_Search.value)
    
    let ShowUI = document.getElementById('ShowUI');       
    // for looder
    ShowUI.innerHTML = '<div class="loading" style="text-align: center; padding: 40px; color: #58a6ff;"><h1>Loading...</h1></div>';
    
    // API
    // setTimeout(() => {
        let API = fetch(`https://newsapi.org/v2/everything?q=${User_Search.value}&from=2024-12-01&sortBy=publishedAt&apiKey=${API_KEY}`);
        
        API
            .then((data) => data.json())
            .then((response) => {
                ShowUI.innerHTML = "";
                let looping = response.articles;
                looping.map((elements) => {
                    
                    ShowUI.innerHTML +=
                    `<div class="card" style="width: 18rem;">
                    <img src="${elements.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>`
                // })
                
                Clear_news(); // YAHAN CALL KARO (promise ke baad)
            })
            .catch((error) => {
                ShowUI.innerHTML = '<div style="text-align: center; padding: 40px; color: red;"><h1>Error loading news!</h1></div>';
                console.log(error);
            })
    }, 100);
}
    
let Clear_news = () => {  // No parameter needed
    console.log("clear function")
    let User_Search = document.getElementById('User_Search');
    User_Search.value = "";
}
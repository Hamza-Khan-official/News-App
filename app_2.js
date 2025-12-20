let Search = async () => {
    let API_KEY = "c3decb47502c488a83fade6e4a88ee97";
    let User_Search = document.getElementById("User_Search");
    let ShowUI = document.getElementById("ShowUI");

    if (User_Search.value === "") {
        alert("Please enter a search term");
        return;
    }

    let proxyUrl = "https://api.allorigins.win/get?url=";
    let targetUrl = `https://newsapi.org/v2/everything?q=${User_Search.value}&sortBy=publishedAt&apiKey=${API_KEY}`;

    ShowUI.innerHTML = '<div class="loading" style="text-align: center; padding: 40px; color: #667eea;"><h2>Loading news...</h2></div>';

    try {
        let response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
        let data = await response.json();
        ShowUI.innerHTML = "";

        let realData = JSON.parse(data.contents);

        realData.articles.forEach((elements) => {
            ShowUI.innerHTML +=
                `<div class="card" style="width: 18rem;">
                    <img src="${elements.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>`
                ;
        });

        User_Search.value = "";

    } catch (error) {
        console.log("Error:", error);
        ShowUI.innerHTML = `
                    <div class="empty-state">
                        <div style="font-size: 4rem; margin-bottom: 20px;">⚠️</div>
                        <h3>Error Loading News</h3>
                        <p>Please check your connection and try again</p>
                    </div>
                `;
    }
};

let Clear_news = () => {
    let ShowUI = document.getElementById("ShowUI");
    let User_Search = document.getElementById("User_Search");

    ShowUI.innerHTML = `
                <div class="empty-state">
                    <div style="font-size: 4rem; margin-bottom: 20px;">🔍</div>
                    <h3>Start Your Search</h3>
                    <p>Enter a keyword above to find the latest news</p>
                </div>
            `;
    User_Search.value = "";
};
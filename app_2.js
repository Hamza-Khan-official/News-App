let Search = async () => {

    let API_KEY = "c3decb47502c488a83fade6e4a88ee97";

    let User_Search = document.getElementById("User_Search");
    let ShowUI = document.getElementById("ShowUI");

    let proxyUrl = "https://api.allorigins.win/get?url=";
    let targetUrl = `https://newsapi.org/v2/everything?q=${User_Search.value}&sortBy=publishedAt&apiKey=${API_KEY}`;

    ShowUI.innerHTML = "";

    try {
        let response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
        let data = await response.json();

        // 🔥 IMPORTANT FIX
        let realData = JSON.parse(data.contents);

        if (!realData.articles || realData.articles.length === 0) {
            ShowUI.innerHTML = "<h4>No news found</h4>";
            return;
        }

        realData.articles.forEach((elements) => {
            ShowUI.innerHTML += `
                <div class="card m-2" style="width: 18rem;">
                    <img src="${elements.urlToImage || 'https://via.placeholder.com/150'}"
                         class="card-img-top" alt="News Image">

                    <div class="card-body">
                        <h5 class="card-title">${elements.title}</h5>
                        <p class="card-text">${elements.description || "No description available"}</p>
                        <a href="${elements.url}" target="_blank" class="btn btn-primary">
                            Read More
                        </a>
                    </div>
                </div>
            `;
        });

        User_Search.value = "";

    } catch (error) {
        console.log("Error:", error);
    }
};

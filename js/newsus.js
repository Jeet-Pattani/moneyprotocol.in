console.log("start of news us js");

//b1ff3b8c3d2046c088d555e9bdb94078

let full_news_card_us = document.getElementById('full_news_card_us');
const xhrus = new XMLHttpRequest();
xhrus.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cb22a231812949f2b0bf49358f18ad2b', true);
xhrus.getResponseHeader('Content-type', 'application/json');

xhrus.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {

            let news = `   
            <div class="card mb-3" style="max-width: 70rem;" id="full_news_card_us">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${element["urlToImage"]}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body full_news_card_body">
                    <a href="${element["url"]}"><h5 class="card-title">${element["title"]}</h5></a>
                        <p class="card-text">${element["description"]}</p>
                        <p class="card-text"><small class="text-muted">${element["publishedAt"]}</small></p>
                    </div>
                </div>
            </div>
        </div>`;
            newsHtml += news;
        });

        full_news_card_us.innerHTML = newsHtml;
    } else {
        console.log("some error occured")
    }
}

xhrus.send()
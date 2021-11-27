 console.log("start of news js");

 //b1ff3b8c3d2046c088d555e9bdb94078

 let full_news_card = document.getElementById('full_news_card');
 const xhr = new XMLHttpRequest();
 xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b1ff3b8c3d2046c088d555e9bdb94078', true);
 xhr.getResponseHeader('Content-type', 'application/json');

 xhr.onload = function() {
     if (this.status === 200) {
         let json = JSON.parse(this.responseText);
         let articles = json.articles;
         console.log(articles);
         let newsHtml = "";
         articles.forEach(function(element) {

             let news = `   
             <div class="card mb-3" style="max-width: 70rem;" id="full_news_card">
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

         full_news_card.innerHTML = newsHtml;
     } else {
         console.log("some error occured")
     }
 }

 xhr.send()
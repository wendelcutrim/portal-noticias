console.log("Start JS");
//Token da API
const API_KEY = "" //insert your news api key here;
//Capturando a URL base do endpoint
const BASE_URL = 'https://newsapi.org/v2';
const GET_SETTINGS = {
    method: 'GET',
    headers: {
        "X-Api-Key": API_KEY,
    }
}
const listaDeNoticias = document.querySelector("#listaDeNoticias");
const techNews = document.querySelector("#tech");

async function getNewsTopHeadlines() {
    const response = await fetch(`${BASE_URL}/top-headlines?country=br`, GET_SETTINGS);
    const data = await response.json();

    data.articles.forEach(article => {
        const card = ` <div class="col-3">
        <div class="card">
            <img src="${article.urlToImage}" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">
                ${article.description}
            </p>
            <a href="${article.url}" class="btn btn-primary" target="_blank">Go to ${article.source.name}</a>
            </div>
        </div>
       </div>`

        listaDeNoticias.insertAdjacentHTML("beforeend", card);
        console.log(data)
    });
}

async function getNewsTechnology() {
    const response = await fetch(`${BASE_URL}/top-headlines?country=br&category=technology`, GET_SETTINGS);
    const data = await response.json();
}

getNewsTopHeadlines();



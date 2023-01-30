let number = "";

number = Math.floor(Math.random() * 7);

function init() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      let firm = "";
      if (query("id") && query("id") != 0) {
        firm = data.firms.filter((firm) => firm.id == query("id"))[0];
      } else firm = data.firms[number];

      renderSiteModel(firm);
    });
}

function renderSiteModel(firm) {
  const body = document.querySelector("body");
  const page = document.querySelector("#root");

  body.style.background = "url(" + firm.background + ") ";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center center";

  const sectionCard = document.createElement("header");
  const sectionThumbs = document.createElement("section");
  const sectionHistory = document.createElement("section");
  const reloadTop = document.createElement("div");
  const reloadBottom = document.createElement("div");
  // const home = document.createElement("div");

  sectionCard.classList.add("card");
  sectionThumbs.classList.add("thumbs");
  sectionHistory.classList.add("history");
  reloadTop.classList.add("reload", "reload-top");
  reloadBottom.classList.add("reload", "reload-bottom");
  // home.classList.add("reload", "back");

  page.appendChild(reloadTop);
  // page.appendChild(home);
  page.appendChild(sectionCard);
  page.appendChild(sectionThumbs);
  page.appendChild(sectionHistory);
  page.appendChild(reloadBottom);

  reloadTop.innerHTML = `<button><a href="model.html">
   Montrer un autre exemple</a>
</button><button id="home"><a href="index.html">
   Page d'accueil</a>
</button>`;
  reloadBottom.innerHTML = `<button><a href="model.html">
   Montrer un autre exemple</a>
</button>`;
  //   home.innerHTML = `<button><a href="index.html">
  //    Page d'accueil</a>
  // </button>`;

  sectionCard.innerHTML = `<img class="firm-picture" alt="logo de ${firm.name}" src="${firm.logo}"/>
  <h1 class="firm-name">${firm.name}</h1>
                    <h2 class="firm-domaine">${firm.domaine}</h2>
                    <hr>
                    <p class="firm-adress">${firm.adress}</p>
                    <p class="firm-adress2">${firm.adress2}</p>
                    <hr>
                    <p class="firm-hours">${firm.horaires}</p>
                    <hr>
                    <div>
                        <a href="mailto:${firm.email}" class="button" target="_blank" id="firm-email">Nous contacter par mail</a>
                        <a href="tel:${firm.telephone}" class="button" target="_blank" id="firm-phone">Nous téléphoner</a>
                        
                        <a href =
    "https://www.facebook.com/${firm.facebook}" class="button" target="_blank" class="button" id="firm-facebook">Facebook</a>
                    </div>
                    `;

  let color = firm.color;
  sectionThumbs.style.backgroundColor = color;
  let thisProducts = firm.products;

  sectionThumbs.innerHTML = `<h3>Nous en images</h3> <div class="divThumbs"></div>`;
  const divThumbs = document.querySelector(".divThumbs");
  for (let i = 0; i < thisProducts.length; i++) {
    let product = thisProducts[i];

    divThumbs.innerHTML += `<figure class="thumbnail">
    <img class="thumbnail-cover" id="thumbnail-cover" src="${product.cover}"
         alt="${product.title}">
    <figcaption>
    <div class="thumbnail-content">
                           <span class="tag" id="tag">${product.tag}</span>
    <h4 class="thumbnail-title" > ${product.title}</h4>
                            <p class="thumbnail-description" >${product.description}</p>
                            <div class="thumbnail-footer">
                                <a href="${product.footer}" target="_blank" >En savoir plus</a>
                            </div>
                        </div>
    
    </figcaption>
</figure>`;
  }
  sectionHistory.style.backgroundColor = color;
  sectionHistory.innerHTML = `<hr><h3>Notre histoire</h3> <div class="divHistory"></div>`;

  const divHistory = document.querySelector(".divHistory");
  let thisHistory = firm.story;

  for (let i = 0; i < thisHistory.length; i++) {
    let history = thisHistory[i];

    divHistory.innerHTML += `<div class="step">
                             <p class="step-date">${history.date}</p>
                        <p class="step-title">${history.event}</p>
                          </div>`;
  }
}

init();

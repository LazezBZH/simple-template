function init() {
  fetch("/portfolio1.json")
    .then((response) => response.json())
    .then((data) => {
      let art = "";

      art = data.arts.filter((art) => art.theme == query("theme"))[0];

      renderArtModel(art);
    });
}

function renderArtModel(art) {
  const body = document.querySelector("body");
  const page = document.querySelector("#root");

  body.style.background = "url(" + art.background + ") ";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center center";

  const headerArt = document.createElement("header");
  const mainArt = document.createElement("main");

  headerArt.classList.add("art");
  mainArt.classList.add("mainArt");

  page.appendChild(headerArt);
  page.appendChild(mainArt);

  headerArt.innerHTML = `
  <h1 class="art-name">${art.name}</h1> <button class="back"><a href="javascript:history.back()">Retour</a></button> `;

  let color = art.color;

  mainArt.style.backgroundColor = color;
  let thisArts = art.products;

  mainArt.innerHTML = `<h2>Quelques exemples</h2> <div class="thumbs"></div>`;
  const divThumbs = document.querySelector(".thumbs");
  for (let i = 0; i < thisArts.length; i++) {
    let art = thisArts[i];

    divThumbs.innerHTML += `<div class="thumbnail"> <figure >
    <img class="thumbnail-cover" id="thumbnail-cover" src="${art.cover}"
         alt="${art.title}">
    <figcaption class="figcaption">
    <div class="thumbnail-content">
    <h3 class="thumbnail-title" > ${art.title}</h3>
                            <h4 class="thumbnail-description" >${art.description}</h4>
                            <div class="thumbnail-details">
                               <p class="thumbnail-description" >${art.details}</p>
                            </div>
                        </div>
    
    </figcaption>
</figure> </div>
`;
  }
}

init();

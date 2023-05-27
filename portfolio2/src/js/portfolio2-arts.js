// peintures

function initPeintures() {
  fetch("/portfolio2.json")
    .then((response) => response.json())
    .then((data) => {
      let art = "";

      art = data.arts.filter((art) => art.theme == "peintures")[0];

      renderPeintures(art);
    });
}

function renderPeintures(art) {
  let color = art.color;
  const peintures = document.getElementById("peintures-container");
  peintures.style.backgroundColor = color;
  let thisArts = art.products;

  peintures.innerHTML = `<div class="thumbs thumbsPeintures"></div>`;
  const divThumbsPeintures = document.querySelector(".thumbsPeintures");
  for (let i = 0; i < thisArts.length; i++) {
    let art = thisArts[i];

    divThumbsPeintures.innerHTML += `<div class="thumbnail-cover" >
    <div class="thumbnail-img">
    <img  src="${art.cover}" alt="${art.title}"></>
         </div>
    
                          <span class="tooltip">
                         
    <figure >
    <img class="thumbnail-cover-big" id="thumbnail-cover" src="${art.cover}"
         alt="${art.title}">
    <figcaption class="figcaption">
    <div class="thumbnail-content">
    <h3 class="thumbnail-title" > ${art.title}</h3>
                            <h4 class="thumbnail-description" >${art.description}</h4>
                          <p>${art.details}</p>
                           </figcaption>
                           <span class="closeTooltipHover">x</span>
                           </figure>
                            
                           </span>
                         
                        </div>
    
   

`;
  }
}

initPeintures();

// encres

function initEncres() {
  fetch("/portfolio2.json")
    .then((response) => response.json())
    .then((data) => {
      let art = "";

      art = data.arts.filter((art) => art.theme == "encres")[0];

      renderEncres(art);
    });
}

function renderEncres(art) {
  let color = art.color;
  const encres = document.getElementById("encres-container");
  encres.style.backgroundColor = color;
  let thisArts = art.products;

  encres.innerHTML = `<div class="thumbs thumbsEncres"></div>`;
  const divThumbsEncres = document.querySelector(".thumbsEncres");
  for (let i = 0; i < thisArts.length; i++) {
    let art = thisArts[i];

    divThumbsEncres.innerHTML += `<div class="thumbnail-cover" >
    <div class="thumbnail-img"><img  src="${art.cover}"
         alt="${art.title}"></div>
    
                          <span class="tooltip">
                          <figure >
    <img class="thumbnail-cover-big" id="thumbnail-cover" src="${art.cover}"
         alt="${art.title}">
    <figcaption class="figcaption">
    <div class="thumbnail-content">
    <h3 class="thumbnail-title" > ${art.title}</h3>
                            <h4 class="thumbnail-description" >${art.description}</h4>
                          <p>${art.details}</p>
                           </figcaption>
                           <span class="closeTooltipHover">x</span>
                           </figure></span>
                        </div>
    
   

`;
  }
}

initEncres();

// sculptures

function initSculptures() {
  fetch("/portfolio2.json")
    .then((response) => response.json())
    .then((data) => {
      let art = "";

      art = data.arts.filter((art) => art.theme == "sculptures")[0];

      renderSculptures(art);
    });
}

function renderSculptures(art) {
  let color = art.color;
  const sculptures = document.getElementById("sculptures-container");
  sculptures.style.backgroundColor = color;
  let thisArts = art.products;

  sculptures.innerHTML = `<div class="thumbs thumbsSculptures"></div>`;
  const divThumbsSculptures = document.querySelector(".thumbsSculptures");
  for (let i = 0; i < thisArts.length; i++) {
    let art = thisArts[i];

    divThumbsSculptures.innerHTML += `<div class="thumbnail-cover" >
    <div class="thumbnail-img"><img  src="${art.cover}"
         alt="${art.title}"></div>
    
                          <span class="tooltip">
                          <figure >
    <img class="thumbnail-cover-big" id="thumbnail-cover" src="${art.cover}"
         alt="${art.title}">
    <figcaption class="figcaption">
    <div class="thumbnail-content">
    <h3 class="thumbnail-title" > ${art.title}</h3>
                            <h4 class="thumbnail-description" >${art.description}</h4>
                          <p>${art.details}</p>
                           </figcaption>
                           <span class="closeTooltipHover">x</span>
                           </figure></span>
                        </div>
    
   

`;
  }
}

initSculptures();

// metal

function initMetal() {
  fetch("/portfolio2.json")
    .then((response) => response.json())
    .then((data) => {
      let art = "";

      art = data.arts.filter((art) => art.theme == "metal")[0];

      renderMetal(art);
    });
}

function renderMetal(art) {
  let color = art.color;
  const metal = document.getElementById("metal-container");
  metal.style.backgroundColor = color;
  let thisArts = art.products;

  metal.innerHTML = `<div class="thumbs thumbsMetal"></div>`;
  const divThumbsMetal = document.querySelector(".thumbsMetal");
  for (let i = 0; i < thisArts.length; i++) {
    let art = thisArts[i];

    divThumbsMetal.innerHTML += `<div class="thumbnail-cover" >
    <div class="thumbnail-img"><img  src="${art.cover}"
         alt="${art.title}"></div>
    
                          <span class="tooltip">
                          <figure >
    <img class="thumbnail-cover-big" id="thumbnail-cover" src="${art.cover}"
         alt="${art.title}">
    <figcaption class="figcaption">
    <div class="thumbnail-content">
    <h3 class="thumbnail-title" > ${art.title}</h3>
                            <h4 class="thumbnail-description" >${art.description}</h4>
                          <p>${art.details}</p>
                           </figcaption>
                           <span class="closeTooltipHover">x</span>
                           </figure></span>
                        </div>
    
   

`;
  }
}

initMetal();

// bois

function initBois() {
  fetch("/portfolio2.json")
    .then((response) => response.json())
    .then((data) => {
      let art = "";

      art = data.arts.filter((art) => art.theme == "bois")[0];

      renderBois(art);
    });
}

function renderBois(art) {
  let color = art.color;
  const bois = document.getElementById("bois-container");
  bois.style.backgroundColor = color;
  let thisArts = art.products;

  bois.innerHTML = `<div class="thumbs thumbsBois"></div>`;
  const divThumbsBois = document.querySelector(".thumbsBois");
  for (let i = 0; i < thisArts.length; i++) {
    let art = thisArts[i];

    divThumbsBois.innerHTML += `<div class="thumbnail-cover" >
    <div class="thumbnail-img"><img  src="${art.cover}"
         alt="${art.title}"></div>
    
                          <span class="tooltip">
                          <figure >
    <img class="thumbnail-cover-big" id="thumbnail-cover" src="${art.cover}"
         alt="${art.title}">
    <figcaption class="figcaption">
    <div class="thumbnail-content">
    <h3 class="thumbnail-title" > ${art.title}</h3>
                            <h4 class="thumbnail-description" >${art.description}</h4>
                          <p>${art.details}</p>
                           </figcaption>
                           <span class="closeTooltipHover">x</span>
                           </figure></span>
                        </div>
    
   

`;
  }
}

initBois();

// photos;

function initPhotos() {
  fetch("/portfolio2.json")
    .then((response) => response.json())
    .then((data) => {
      let art = "";

      art = data.arts.filter((art) => art.theme == "photos")[0];
      console.log("art", art);
      renderPhotos(art);
    });
}

function renderPhotos(art) {
  let color = art.color;
  const photos = document.querySelector(".photos-container_photos");
  photos.style.backgroundColor = color;
  let thisArts = art.products;

  photos.innerHTML = `<div class="thumbs thumbsPhotos"></div>`;
  const divThumbsPhotos = document.querySelector(".thumbsPhotos");
  for (let i = 0; i < thisArts.length; i++) {
    let art = thisArts[i];

    divThumbsPhotos.innerHTML += `<div class="thumbnail-cover" >
    <div class="thumbnail-img"><img  src="${art.cover}"
         alt="${art.title}"></div>

                          <span class="tooltip">
                          <figure >
    <img class="thumbnail-cover-big" id="thumbnail-cover" src="${art.cover}"
         alt="${art.title}">
    <figcaption class="figcaption">
    <div class="thumbnail-content">
    <h3 class="thumbnail-title" > ${art.title}</h3>
                            <h4 class="thumbnail-description" >${art.description}</h4>
                          <p>${art.details}</p>
                           </figcaption>
                           <span class="closeTooltipHover">x</span>
                           </figure></span>
                        </div>

`;
  }
}

initPhotos();

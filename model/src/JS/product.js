let number = "";

function init() {
  fetch("/model.json")
    .then((response) => response.json())
    .then((data) => {
      let firm = "";
      if (query("id") && query("id") != 0) {
        firm = data.firms.filter((firm) => firm.id == query("id"))[0];
      }
      let product = "";
      product = firm.products.filter(
        (product) => product.id == query("productId")
      )[0];

      renderProductModel(product, firm);
    });
}

function renderProductModel(product, firm) {
  const productBody = document.querySelector("#productBody");
  const productPage = document.querySelector("#productRoot");
  let color = firm.color;
  productBody.style.background = "url(" + firm.background + ") ";
  productBody.style.backgroundRepeat = "no-repeat";
  productBody.style.backgroundSize = "cover";
  productBody.style.backgroundPosition = "center center";
  productPage.style.backgroundColor = color;

  const sectionProductImage = document.createElement("section");
  const sectionProductText = document.createElement("section");

  sectionProductImage.classList.add("productImg");
  sectionProductText.classList.add("productTxt");

  productPage.appendChild(sectionProductImage);
  productPage.appendChild(sectionProductText);

  sectionProductImage.innerHTML = `
 <img class="productImage" id="productImage" src="${product.cover}"
         alt="${product.title}">
`;
  sectionProductText.innerHTML = `<h1>${product.title}
</h1> <button class="back"><a href="/model/model.html?id=${firm.id}">X</a></button>
<h2>${product.description}</h2>
<p>${product.details}</p>`;
}

init();

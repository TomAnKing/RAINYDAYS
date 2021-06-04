const url = "https://www.tomanking.one/wp-json/wc/store/products/";

const jacketContainer = document.querySelector(".gridContainer");

const sortPriceBtn = document.querySelector("#sortPrice");

const sortPriceBtn2 = document.querySelector("#sortPrice2");

const sortNameBtn = document.querySelector("#sortName");

let jackets = [];

async function addJackets() {
  try {
    const response = await fetch(url);
    jacketContainer.innerHTML = "";

    jackets = await response.json();

    jackets.sort((a, b) => (a.name > b.name ? 1 : -1));

    console.log(jackets);
    buildHtml();
  } catch (error) {
    console.log("An error occured");
  }
}

addJackets();

function buildHtml() {
  jacketContainer.innerHTML = "";
  jackets.forEach((jacket) => {
    jacketContainer.innerHTML += `<a href="turquois.html?id=${jacket.id}">
          <div class="product">
          <img src=${jacket.images[0].src} alt="${jacket.name} rain jacket">
          <p>${jacket.name}<span><span class="price">${jacket.prices.price},-</span></p>
          </div>
          </a>`;
  });
}

function sortByName() {}

sortPriceBtn.addEventListener("click", function () {
  jackets.sort((a, b) => (a.prices.price > b.prices.price ? 1 : -1));
  buildHtml();
});
sortPriceBtn2.addEventListener("click", function () {
  jackets.sort((a, b) => (a.prices.price < b.prices.price ? 1 : -1));
  buildHtml();
});
sortNameBtn.addEventListener("click", function () {
  jackets.sort((a, b) => (a.name > b.name ? 1 : -1));
  buildHtml();
});

import { jackets } from "../js/jacketArray.js";

addJackets();

function addJackets() {
  const jacketContainer = document.querySelector(".gridContainer");

  //jackets.sort((a,b) => a.price > b.price ? 1:-1);

  jackets.forEach((jacket) => {
    jacketContainer.innerHTML += `<a href="turquois.html?id=${jacket.id}">
        <div class="product">
        <img src=${jacket.imageURL} alt="${jacket.name} rain jacket">
        <p>${jacket.name}<span><span class="price">${jacket.price},-</span></p>
        </div>
        </a>`;

    if (jacket.gender === "female") {
      jackestToShow.push(jacket);
    }
  });
}

function sortJackets() {
  jackets.sort((a, b) => (a.price > b.price ? 1 : -1));
  addJackets();
}

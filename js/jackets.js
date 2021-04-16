const url = "https://www.tomanking.one/wp-json/wc/store/products/";

const jacketContainer = document.querySelector(".gridContainer");

async function addJackets() {
  try {
    const response = await fetch(url);

    const jackets = await response.json();

    jackets.reverse();

    console.log(jackets);

    jacketContainer.innerHTML = "";

    jackets.forEach((jacket) => {
      jacketContainer.innerHTML += `<a href="turquois.html?id=${jacket.id}">
            <div class="product">
            <img src=${jacket.images[0].src} alt="${jacket.name} rain jacket">
            <p>${jacket.name}<span><span class="price">${jacket.prices.price},-</span></p>
            </div>
            </a>`;
    });
  } catch (error) {
    console.log("An error occured");
  }
}

addJackets();

const jacketDetail = document.querySelector(".gridContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://www.tomanking.one/wp-json/wc/store/products/" + id;

async function fetchJacket() {
  try {
    const response = await fetch(url);

    const details = await response.json();

    jacketDetail.innerHTML = "";

    jacketDetail.innerHTML = `<div class="gridLeft">
    <div id="backbutton">
        <p>
            <a href="jackets.html">Jackets ></a
            ><span> ${details.name}</span>
        </p>
    </div>
        <img
            id="productImage"
            src="${details.images[0].src}"
            alt="${details.name} rain jacket"
        />
    </div>
    <div class="gridRight">
        <h1>${details.name} - Rain Jacket</h1>
    <div id="info">
        <p>${details.prices.price} kr</p>
        <p>Color: <span>${details.sku}</span></p>
    </div>
        <a href="shoppingcart.html?id=${details.id}" class="${
      details.is_in_stock ? "btn" : "btn2"
    }" style="text-align: center">
            ${details.is_in_stock ? "Add to cart" : "Out of stock"}
        </a>
    </div>`;
  } catch (error) {
    console.log("An error occured");
  }
}

fetchJacket();

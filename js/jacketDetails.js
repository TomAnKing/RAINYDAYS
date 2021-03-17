import { jackets } from "../js/jacketArray.js";

const jacketDetail = document.querySelector(".gridContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const JacketId = params.get("id");

const jacket = jackets.find((jacket) => jacket.id === parseInt(JacketId));

jacketDetail.innerHTML = `<div class="gridLeft">
<div id="backbutton">
  <p>
    <a href="jackets.html">Jackets ></a
    ><span> ${jacket.name}</span>
  </p>
</div>
<img
  id="productImage"
  src="${jacket.imageURL}"
  alt="${jacket.name} rain jacket"
/>
</div>
<div class="gridRight">
<h1>${jacket.name} - Rain Jacket</h1>
<div id="info">
  <p>${jacket.price} kr</p>
  <p>Color: <span>${jacket.color}</span></p>
</div>
<a href="shoppingcart.html?id=${jacket.id}" class="${
  jacket.inStock ? "btn" : "btn2"
}" style="text-align: center">
  ${jacket.inStock ? "Add to cart" : "Out of stock"}
</a>
</div>`;

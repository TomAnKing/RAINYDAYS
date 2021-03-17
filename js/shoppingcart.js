import { jackets } from "../js/jacketArray.js";

const shoppingcart = document.querySelector(".gridContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const JacketId = params.get("id");

const jacket = jackets.find((jacket) => jacket.id === parseInt(JacketId));

shoppingcart.innerHTML = `<div class="gridLeft">
<div class="header">Shopping Cart</div>
<div id="cartInfo">
  <img id="jacket" src="${jacket.imageURL}" alt="jacket" />
  <div id="info">
    <p><b>${jacket.name} - Rain Jacket</b></p>
    <p>${jacket.price} kr.</p>
    <p>Color: <b>${jacket.color}</b></p>
  </div>
</div>
</div>
<div class="gridRight">
<div class="header">Cart Summary</div>
<div id="subTotal">
  <p clas="priceInfo">
    <b class="priceInfo">Subtotal</b>
    <span class="price"><b>${jacket.price},00 kr.</b></span>
  </p>
  <p class="priceInfo">Shipping <span class="price">Free</span></p>
</div>
<div id="total">
  <p class="priceInfo">
    Total <span class="price">${jacket.price},00 kr.</span>
  </p>
</div>
<div id="ordrBtn">
  <a
    href="../login/signin.html"
    class="btn"
    style="text-align: center"
  >
    Place Order
  </a>
</div>
</div>`;

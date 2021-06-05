const shoppingcart = document.querySelector(".gridContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://www.tomanking.one/wp-json/wc/store/products/" + id;

async function fetchJacket() {
  try {
    const response = await fetch(url);

    const details = await response.json();

    shoppingcart.innerHTML = "";

    shoppingcart.innerHTML = `<div class="gridLeft">
    <div class="header">Shopping Cart</div>
    <div id="cartInfo">
      <img id="jacket" src="${details.images[0].src}" alt="jacket" />
      <div id="info">
        <p><b>${details.name} - Rain Jacket</b></p>
        <p>${details.prices.price} kr.</p>
        <p>Color: <b>${details.sku}</b></p>
      </div>
    </div>
    </div>
    <div class="gridRight">
    <div class="header">Cart Summary</div>
    <div id="subTotal">
      <p clas="priceInfo">
        <b class="priceInfo">Subtotal</b>
        <span class="price"><b>${details.prices.price},00 kr.</b></span>
      </p>
      <p class="priceInfo">Shipping <span class="price">Free</span></p>
    </div>
    <div id="total">
      <p class="priceInfo">
        Total <span class="price">${details.prices.price},00 kr.</span>
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
  } catch (error) {
    console.log("An error occured");
  }
}

fetchJacket();

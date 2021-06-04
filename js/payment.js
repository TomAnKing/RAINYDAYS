const form = document.querySelector("#paymentForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const cardNubmer = document.querySelector("#cardNubmer");
const cardNumberError = document.querySelector("#cardNumberError");
const expiryDate = document.querySelector("#expiryDate");
const expiryDateError = document.querySelector("#expiryDateError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");

function validateForm(event) {
  event.preventDefault();

  let success = true;

  if (checkLength(name.value, 3) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    success = false;
  }

  if (checkLength(cardNumber.value, 16) === true) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
    success = false;
  }

  if (checkLength(expiryDate.value, 4) === true) {
    expiryDateError.style.display = "none";
  } else {
    expiryDateError.style.display = "block";
    success = false;
  }

  if (checkLength(cvc.value, 3) === true) {
    cvcError.style.display = "none";
  } else {
    cvcError.style.display = "block";
    success = false;
  }

  if (success) {
    window.location.href = "../chekout.html";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

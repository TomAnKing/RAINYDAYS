const form = document.querySelector("#registerForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const sirName = document.querySelector("#sirName");
const sirNameError = document.querySelector("#sirNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

function validateForm(event) {
  event.preventDefault();

  let success = true;

  if (checkLength(firstName.value, 1) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
    success = false;
  }

  if (checkLength(sirName.value, 1) === true) {
    sirNameError.style.display = "none";
  } else {
    sirNameError.style.display = "block";
    success = false;
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    success = false;
  }

  if (checkLength(password.value, 8) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
    success = false;
  }

  if (success) {
    window.location.href = "../payment.html";
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

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

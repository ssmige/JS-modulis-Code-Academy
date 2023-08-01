const emailInput = document.querySelector("input[type=email]");
const ageInput = document.querySelector("input[type=number]");
const commentInput = document.querySelector("input[type=text]");
const driversLicenseCheckBoxInput = document.querySelector(
  "input[type=checkbox]"
);
const makeSelect = document.querySelector("#make");
const h1 = document.querySelector("h1");
const passwordInput = document.querySelector("input[type=password]");
const sayHelloButton = document.querySelector("#sayHelloButton");
document.querySelector("#someForm").addEventListener("submit", handleSubmit);
driversLicenseCheckBoxInput.addEventListener("change", handleCheckBoxChange);
passwordInput.addEventListener("input", passwordChangeHandler);

sayHelloButton.addEventListener("click", sayHelloHandler);

function sayHelloHandler() {
  const age = ageInput.value;
  const comment = commentInput.value;

  h1.textContent = `jusu amzius yra ${age} ir jusu nuomone apie pasauli yra ${comment}`;
}

function passwordChangeHandler(event) {
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
  const password = event.target.value;

  const isPasswordStrong = regex.test(password);

  if (isPasswordStrong) {
    passwordInput.classList.add("good");
    passwordInput.classList.remove("bad");
  } else {
    passwordInput.classList.add("bad");
    passwordInput.classList.remove("good");
  }
  if (!password) {
    passwordInput.classList.remove("good");
    passwordInput.classList.remove("bad");
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const email = emailInput.value;
  const age = ageInput.value;
  const comment = commentInput.value;
  const driverLicense = driversLicenseCheckBoxInput.cheked;
  const make = makeSelect.value;

  const values = {
    email,
    age,
    comment,
    hasDriversLicense: driversLicense,
    make,
  };
  console.log(values);
}

function handleCheckBoxChange(event) {
  const isChecked = event.target.checked;
  if (isChecked) {
    makeSelect.classList.remove("hidden");
  } else {
    makeSelect.classList.add("hidden");
  }
}

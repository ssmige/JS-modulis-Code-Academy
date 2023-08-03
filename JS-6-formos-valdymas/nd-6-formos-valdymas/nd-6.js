// Sukurk input į kurį įvestum savo vardą. Submit paspaudus - išoktų alert su tavo vardu.
// Sukurk input į kurį įvesi savo amžių. Padaryk, kad submit paspaudus, viršuj esančiame h1 elemente atsirastų "Tavo amžius: [amžius]".
// Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių. Jei daugiau nei 18 - išmeta h1 elemente "Vairuoti gali: [vardas]"; jei nėra išmeta: "Dar mokysis vairuotis: [vardas]".

const nameInput = document.querySelector("input[type=text");
const ageInput = document.querySelector("input[type=number]");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const submitButton = document.querySelector("#submitButton");

document.querySelector("form").addEventListener("submit", submitHandler);

submitButton.addEventListener("click", alertName);

submitButton.addEventListener("click", yourAge);
submitButton.addEventListener("click", canDrive);

function submitHandler(event) {
  event.preventDefault();
}

function alertName() {
  alert(nameInput.value);
}

function yourAge() {
  const yourAge = ageInput.value;
  h1.textContent = `Tavo amžius: ${yourAge}`;
}
function canDrive(params) {
  const yourAge = ageInput.value;
  const name = nameInput.value;
  if (yourAge >= 18) {
    h2.textContent = `Vairuoti gali ${name}`;
  } else {
    h2.textContent = `Dar mokysis vairuoti, ${name}`;
  }
}
console.log(ageInput.value);

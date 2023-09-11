/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const inputKg = document.querySelector("#search");
const outputDiv = document.querySelector("#output");
const form = document.querySelector("form");

form.addEventListener("submit", convert);
function convert(e) {
  e.preventDefault();
  let kg = inputKg.value;

  let svarai = kg * 2.2046;
  const outputlb = document.createElement("h3");
  outputlb.textContent = `${svarai} lb `;

  let gramai = (kg * kg) / 0.001;
  const outputGr = document.createElement("h3");
  outputGr.textContent = `${gramai} g `;

  let uncijos = kg * 35.274;
  const outputOz = document.createElement("h3");
  outputOz.textContent = `${uncijos} lb `;

  outputDiv.append(outputlb, outputGr, outputOz);
}

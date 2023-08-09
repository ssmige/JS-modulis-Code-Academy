// ....1 užduotis
// Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš daug mažų L raidžių).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspausdinti tokį rezultatą:
// L
// L
// L
// L L L L
// ...Mano variantas
const letterNumInput = document.querySelector("#letterNumInput");
const pLetterL = document.querySelector("#pLetterL");

function drawL(event) {
  numLetterL = event.target.value;
  LLL = "";
  LLL += "L";
  for (let i = 1; i < numLetterL; i++) {
    LLL += "L";
  }
  const letterL = document.createElement("p");
  letterL.textContent = `${LLL}`;
  pLetterL.append(letterL);
}
letterNumInput.addEventListener("input", drawL);

//  1  užduotis pagal ataskymą

// function drawL(event) {
//   const size = Number(event.target.value);
//   const outputElement = document.querySelector("#output");
//   let output = "";
//   for (let i = 0; i < size - 1; i++) {
//     output += "L<br>";
//   }
//   for (let i = 0; i < size; i++) {
//     output += "L";
//   }
//   outputElement.innerHTML = output;
// }
// document.querySelector("#size").addEventListener("input", drawL);

//  2  užduotis
// Sukurkite panašią funkciją, kuri atspausdintų C raidę.
// t.y. jei kviesite funkciją fn(5), tai turėtų atspausdinti tokį rezultatą:
// CCCCC
// C
// C
// C
// CCCCC

function drawC(event) {
  const size2 = Number(event.target.value);
  const outputElement2 = document.querySelector("#output2");

  if (size2 < 3) {
    outputElement2.innerHTML = "C letter size must be at least 3";
    return;
  }
  let output2 = "";
  for (let i = 0; i < size2 - 1; i++) {
    output2 += "C";
  }

  for (let i = 0; i < size2 - 1; i++) {
    output2 += "C<br> ";
  }
  for (let i = 0; i < size2; i++) {
    output2 += "C";
  }

  outputElement2.innerHTML = output2;
}

size2.addEventListener("input", drawC);

//  3  užduotis
// Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
// Pvz.: Petras, Jonas, Mantas, Antanas.
let nameInput = document.querySelector("#nameInput");
const outputName = document.querySelector("#outputName");

function createNameList(e) {
  outputName.textContent += e.target.value + ", ";
}
nameInput.addEventListener("blur", createNameList);

//  4  užduotis

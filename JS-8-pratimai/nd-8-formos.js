// ....1 užduotis
// Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš daug mažų L raidžių).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspausdinti tokį rezultatą:
// L
// L
// L
// L L L L

let letterNumInput = document.querySelector("#letterNumInput");
const pLetterL1 = document.querySelector("#pLetterL1");
const pLetterL2 = document.querySelector("#pLetterL2");
const buttonL = document.querySelector("#buttonL");

letterNumInput.addEventListener("input", drawL);

function drawL() {
  numLetterL = letterNumInput.value;
  LLL = "";
  LLL += "L";
  const letterL = document.createElement("p");
  letterL.innerHTML = `${LLL}`;
  pLetterL1.append(letterL);
  for (let i = 0; i < numLetterL; i++) {
    LLL += "L";
  }
  pLetterL2.innerHTML = `${LLL}`;
  //   const letterL = document.createElement("p");
  //   letterL.innerHTML = `${LLL}`;
  //   pLetterL1.append(letterL);
}
// console.log(buttonL);

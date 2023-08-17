//Pasirašykite variable isLegalAge, kurį priskirkite true arba false. Console.log'e atvaizduokite šį variable. Sukurkite antrą console.log, kuriame atvaizduokite šį variable su toString() metodu. Turėtų skirtis spalva teksto.

const isLegalAge = true;
console.log(typeof isLegalAge);
isLegalAge.toString();
console.log(isLegalAge);

//JS String metodai
//...........1 pratimas
//Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
const form1 = document.querySelector("#form1");
const nameInput = document.querySelector("#nameInput");
const numInput = document.querySelector("#numInput");
const div1 = document.querySelector("#div1");

form1.addEventListener("submit", arSveikasNum);

function arSveikasNum(e) {
  e.preventDefault();

  const skaicius = Number(numInput.value);
  const name = nameInput.value;
  if (Number.isInteger(skaicius)) {
    const h1 = document.createElement("h1");
    h1.textContent = name.repeat(skaicius);
    div1.append(h1);
  } else {
    alert("Number is not an integer");
  }
}

//..............2 pratimas
//Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

let nameInput2 = document.querySelector("#nameInput2");
const form2 = document.querySelector("#form2");

form2.addEventListener("submit", nameLength);

function nameLength(e) {
  e.preventDefault();
  let lengthInput = nameInput2.value.trim();
  alert("Length: " + lengthInput.length);
}

//..............3 pratimas
//Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.

const nameSurnameInput = document.querySelector("#nameSurnameInput");
const div3 = document.querySelector("#div3");
const button = document.querySelector("#vykdyti");
console.log(div3);

button.addEventListener("submit", splitInput);
function splitInput(e) {
  e.preventDefault();
  console.log();
}

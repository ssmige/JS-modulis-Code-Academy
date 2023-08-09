// ......1 užduotis
// H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.
const styleh1 = document.querySelector("#styleh1");

styleh1.addEventListener("click", changeH1Color);

function changeH1Color() {
  styleh1.style.color = "red";
  styleh1.style.textAlign = "center";
  styleh1.style.fontSize = "4rem";
}

// ......2 užduotis
// Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.
const buttonPosition = document.querySelector("#buttonPosition");

buttonPosition.addEventListener("click", changePosition);

// function changePosition() {
//   if (buttonPosition.classList.contains("button-left-top")) {
//     buttonPosition.classList.remove("button-left-top");
//     buttonPosition.classList.add("button-right-bottom");
//   } else {
//     buttonPosition.classList.add("button-left-top");
//     buttonPosition.classList.remove("button-right-bottom");
//   }
// }

// ......3 užduotis
//Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle.
function changePosition() {
  if (buttonPosition.classList.contains("button-left-top")) {
    buttonPosition.classList.remove("button-left-top");
    buttonPosition.classList.add("button-right-top");
  } else if (buttonPosition.classList.contains("button-right-top")) {
    buttonPosition.classList.remove("button-right-top");
    buttonPosition.classList.add("button-right-bottom");
  } else if (buttonPosition.classList.contains("button-right-bottom")) {
    buttonPosition.classList.remove("button-right-bottom");
    buttonPosition.classList.add("button-left-bottom");
  } else {
    buttonPosition.classList.add("button-left-top");
    buttonPosition.classList.remove("button-left-bottom");
  }
}

// ......4 užduotis
//Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą. Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du simboliai arba mažiau - viso puslapio fonas raudonas. Jei daugiau nei du simboliai - puslapio fonas žalias.

const inpChangeBackground = document.querySelector("#inpChangeBackground");
const body = document.querySelector("body");

inpChangeBackground.addEventListener("input", changeBackground);

function changeBackground(e) {
  const name = e.target.value;
  if (name.length > 3) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "red";
  }
}

// ......5 užduotis
//Sukurkite mygtuką HTML'e. O su JS pasirašykite array su keturiom spalvom (["red", "green", "blue", "yellow"]). Paspaudus ant mygtuko - tegul jo spalva pasikeičia į atsitiktinę spalvą.

const color = ["red", "green", "blue", "yellow"];
const btnColor = document.querySelector("#btnColor");
btnColor.addEventListener("click");

// ......6 užduotis
// Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB spalvas. Paspaudus ant mygtuko, susigeneruoja trys random skaičiai (nuo 0 iki 255, imtinai), šie skaičiai atvaizduoja spalvų paletę (red, green, blue => RGB). Padarykite, kad paspaudus ant mygtuko, jo fono spalva pasikeistų į atsiktinę spalvą pagal RGB paletę.

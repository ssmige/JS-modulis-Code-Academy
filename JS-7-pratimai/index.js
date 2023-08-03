//Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
//Pvz: [16] => "Jūsų bonusas: 100 eurų".

const form = document.querySelector("form");

const h1 = document.querySelector("h1");

const years = document.querySelector("#yearsInput");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const years1 = years.value;

  let bonus = 50;
  if (years1 >= 10) {
    bonus += 50;
  }
  if (years1 >= 20) {
    bonus += 100;
  }
  h1.textContent = `Jūsų bonusas: ${bonus} eurų`;
}

//  <!-- 2 užduotis -->
//Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

// const form2 = document.querySelector("#form2");
// const metaiInput = document.querySelector("#metaiInput");
// const h3 = document.querySelector("h3");
// form2.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   let metai = metaiInput.value;

//   metai % 100 === 0 ? metai % 400 === 0 : metai % 4 === 0;
// }
// console.log(return);

//   if (everyConditionsMet) {
//     h3.textContent = `Taip, metai keliamieji`;
//   } else {
//     h3.textContent = `Ne`;
//   }
// }

// <!-- 3 užduotis -->
//Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

const celsiusInput = document.querySelector("#temperC");
const p = document.querySelector("p");
const fahrenheitInput = document.querySelector("#temperF");

celsiusInput.addEventListener("input", convertcelsiusToFarenheit);

function convertcelsiusToFarenheit() {
  let celsius = celsiusInput.value;
  let fahrenheit = (celsius * 9) / 5 + 32;
  fahrenheitInput.value = `${fahrenheit}`;
}

//4 užduotis
//Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

const emailInput = document.querySelector("#emailInput");
const email = emailInput.value;
const checkbox = document.querySelector("#acceptEmails");

h3RegistrPatvirtin = document.querySelector("#h3RegistrPatvirtin");
const registrButton = document.querySelector("#registrButton");
const form4 = document.querySelector("#agree");

form4.addEventListener("submit", sutinku);

function sutinku(event) {
  event.preventDefault();

  const checked = checkbox.checked;
  h3RegistrPatvirtin.textContent = checked
    ? `El. paštas ${email} sėkmingai užregistruotas`
    : `Registracija nesėkminga`;
}

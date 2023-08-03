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

// Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

const form2 = document.querySelector("#form2");
const metaiInput = document.querySelector("#metaiInput");
const h3 = document.querySelector("h3");
form2.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let metai = metaiInput.value;

   metai % 100 === 0 ? metai % 400 === 0 : metai % 4 === 0;
  
  console.log(return);
}
// console.log(return);

//   if (everyConditionsMet) {
//     h3.textContent = `Taip, metai keliamieji`;
//   } else {
//     h3.textContent = `Ne`;
//   }
// }

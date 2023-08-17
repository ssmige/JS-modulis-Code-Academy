// 1 pratimas

// Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

const cars = ["BMW", "VW", "Audi"];
// cars.forEach((value) => console.log(value));

// 2 pratimas
// Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).
// cars.forEach((v, i) => console.log(i + ":" + v));

// 3 pratimas
// Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

const draugai = ["peTras", "Jonas", "aNTanaS"];

function toUpperCase(arr) {
  const newDraugai = draugai.map(
    (newDr) => newDr.charAt(0).toUpperCase() + newDr.slice(1).toLowerCase()
  );
  //   console.log(newDraugai);
}
toUpperCase(draugai);

// 4 pratimas
//Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
const friendAge = [16, 20, 65, 21, 15, 18, 35];

function filterOlderPeople(arr) {
  const olderFriends = friendAge.filter((older) => older >= 18);
  console.log(olderFriends);
}
filterOlderPeople(friendAge);

// 5 pratimas
//Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
const cities = [
  "Vilnius",
  "Kaunas",
  "Panevėžys",
  "Šiauliai",
  "Kelmė",
  "molėtai",
];
function findCities(arr) {
  const cityK = cities.find((ci) => ci.charAt(0) === "K");
  console.log(cityK);
}
findCities(cities);

// 6 pratimas
// Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
function someLowerCase(arr) {
  const lowerCase = cities.some(
    (l) => l.charAt(0) === l.charAt(0).toLowerCase()
  );
  //   console.log(lowerCase);
}
someLowerCase(cities);

// 7 pratimas
// Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.
function isAllUpperCase(arr) {
  const allUpperCase = cities.every(
    (uppCase) => uppCase.charAt(0) === uppCase.charAt(0).toUpperCase()
  );
  console.log(allUpperCase);
}
isAllUpperCase(cities);

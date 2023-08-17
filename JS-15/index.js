// ......1 pratimas
//Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".

const minutToSec = (n1) => n1 * 60 + " seconds";
console.log(minutToSec(10));

// ......2 pratimas
// Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.

const amzius = (n2) => n2 * 365;
console.log(amzius(5));

// ......3 pratimas

// Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25

const kvadratas = (n3) => n3 * n3;
console.log(kvadratas(9));

//......4 pratimas
// Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50

const trikampioPlotas = (x, y) => (x * y) / 2;
console.log(trikampioPlotas(3, 3));

// ......5 pratimas
// Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".
const str = "Petras";
const lastLetter = str.charAt(str.length - 1);
console.log(lastLetter);

// ......6 pratimas
// Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"

const str1 = "Petras";
const apverstas = str1.split("").reverse().join("").toLowerCase();
console.log(apverstas);

//......7 pratimas
// Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

const num = [-1, -100, -5, 10, 0, 11];
const neigiamasMax = num.filter((x) => x < 0).sort((a, b) => b - a)[0];
console.log(neigiamasMax);

//??????????????
// ......8 pratimas
// Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].

// const randomNumbers = (quant) => {
//   const generatedNums = [];
//   for (let i = 0; i < quant; i++) {
//     console.log(generatedNums.push(Math.floor(Math.random() * 10) + 1));
//   }
//   return generatedNums;
// };

// const arr = [];
// for (let i = 1; i < 10; i++) {
//   arr.push(random(1, 10));
// }

// function random() {
// let res = Math.floor(Math.random() * 10 + 1);
//   return res;
// }
// ......9 pratimas
// Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value, ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true

const sumDaugiau100 = (n1, n2) => n1 + n2 < 100;

console.log(sumDaugiau100(10, 50));

//......10 pratimas
// Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

const person = [
  { name: "Alfredas", age: 25 },
  { name: "Jonas", age: 25 },
  { name: "Kasparas", age: 20 },
];
const sortedPerson = (person) =>
  person
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .sort((a, b) => a.age - b.age);
console.log(sortedPerson(person));

//??????????????
// ......11 pratimas
// Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true
// function isHoliday(date) {
//   const holidays = [
//     "2020, 01, 01",
//     "2020, 02, 16",
//     "2020, 07, 06",
//     "2020, 12, 25",
//   ];

//   return holidays.some(
//     (holidays) => new Date(holidays).getDate() === date.getDate()
//   );
// }
// console.log(isHoliday(new Date("2021, 02, 01")));

function isItHoliday(date) {
  const holidays = ["2020-01-01", "2020-05-25"];
  return holidays.some(
    (holiday) => new Date(holiday).getDate() === date.getDate()
  );
}

console.log(isItHoliday(new Date("2020-04-25")));

// ......12 pratimas
// Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

const arr = [1, 2, 3, 4, 5, 7];

const trukstaSkaiciaus = (arr) => arr.find((x, i) => x + 1 !== arr[i + 1]) + 1;
console.log(trukstaSkaiciaus(arr));

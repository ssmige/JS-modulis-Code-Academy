console.log("External js file");

const isRainingOutSide= false; //boolean pvz.

let vardas = null//null- "nieko" 
console.log(vardas);

const didelisSkaicius = 123254554654678798346464465456454656521314n // Biglnt labai didelis skaicius

const symbol="k";

const isGreaterThan = 2 > 3; // falce arba true
console.log(isGreaterThan);

const inf = Infinity;
console.log(inf);

const lastName = "Pavarde"
const templateLiteral = `labas ate $(lastName)`
console.log(templateLiteral);

const kabutesKabutes = 'Marius sake "Labas"'
// console.log(kabutesKabutes);
const kabutesKabutes2 = "Marius sake \"Labas\"" //kai reikia kabuciu tekste
console.log(kabutesKabutes2);

console.log(typeof kabutesKabutes2); //galima patikrinti koks 

let number = 9; // prie skaiciaus prideti 1
// number = number + 1;
number = ++number // prie skaiciaus prideti 1 atskiras operatorius
console.log(number);

number += 6; //prie skaiciaus prideti kazki skaiciu- atskiras operatorius
console.log(number);


const array= [1, 2,"labas" , true];
console.log(array[0]); //pirma reiksme 0

const comparison = 4==3 //palyginimas
console.log(comparison);
const comparison1 = 4 === "4" //=== yra grieztas palyginimas, ji naudoti
console.log(comparison1);

// const comparison2


const logic = true && false;
console.log(logic);

const logic1 = true || false;
console.log(logic1);

const logic2 = !false;
console.log(logic2);

const logic3 = !'cat' //konvertuoja i priesinga operatoriu
console.log(logic3);

const logic4 = !!'cat' //konvertuoja operatoriu du kartus
console.log(logic4);

const ternary = 12 < 5 ? 'Teisinga' : 'Neteisinga'; // ternary operatorius yra if sutrumpinimas
const ternary2 = lastName === "Pavarde1" ? "Atspejau pavarde" : "neatspejau "
console.log(ternary2);





 

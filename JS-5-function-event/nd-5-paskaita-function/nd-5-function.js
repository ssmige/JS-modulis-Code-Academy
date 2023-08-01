//...........1 užduotis
// Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)

function alertName(name) {
    alert(name)
}
// alertName('BlaBla');

//...........2 užduotis
// Ir ne visos funkcijos turi parametrus - sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

function genetateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
    
}
console.log(genetateRandomNumber(1,  5));


//...........3 užduotis
// Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

function sumNameSurnameLenght(name, surname) {
    return name.length + surname.length;
      
}
console.log(sumNameSurnameLenght('pppp', 'Sssss'));

//...........4 užduotis
//Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array - pasižiūrėkite čia.

function lettersToNumbers(index) {
    const letters = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    return letters[index];
}
console.log(lettersToNumbers(0));

    
//.......... 5 užduotis
//Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.

function sumN1andN2(n1, n2, operator) {
   return  n1 + n2
   n1 - n2;
    n1 * n2;
   n1 / n2;
}
console.log(sumN1andN2 (1, 4));
//.......... 6 užduotis
//Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).
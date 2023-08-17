// Pratimai

// Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.

const friend = ["Jurgita", "Ausra", "Lora", "Marius", "Brone"];
friend.sort();
// console.log(friend);

// Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.
const friend1 = ["Jurgita", "Ausra", "Lora", "Marius", "Brone"];
const sortedFriend1 = friend1.sort((a, b) => {
  return b.charCodeAt(b.length - 1) - a.charCodeAt(a.length - 1);
});
// console.log(sortedFriend1);

// Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).
const num = [5, 10, 20, 11, 12, 1, 0, 14, 25];
num.sort((a, b) => {
  return b - a;
});
// console.log(num);

//Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių).
const num1 = [10, 5, 20, 4];

num1.sort((a, b) => {
  return b - a;
});
// console.log(num1[0]);

//    Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.

const number = [5, 67, 89, 2, 4];


//Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).
//Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce.

const lygu = 2 === 2;
console.log(lygu);

const lygu1 = 2 == "2"
console.log(lygu1)

const nelygu = 2 !== 2
console.log(nelygu)

const maziau = 5 < 5
console.log(maziau);

const maziauLygu = 5 >= 4
console.log(maziauLygu);

const trueFalse = true !== false
console.log(trueFalse); // True

const atimti = 9 - 5 === 4
console.log(atimti);

const daugyba = 5 * 5 !== "25"
console.log(daugyba); // true

const true1 = true && true
console.log(true1);

const labaiLygu = 2 === 5 && true
console.log(labaiLygu);

const sesiKart = 6 * 6 === 36 && 15 - 9 == "6"
console.log(sesiKart);

const false1 = false || false
console.log(false1);

const desimt = 10 === 10 || 5 == 2
console.log(desimt);

const duKartDu= 2 * 2 / 2 == "1" || 5 * 5 === 25
console.log(duKartDu);

const keturiolika = 14 * 2 !== "28" || "Jonas" == "Jonas"
console.log(keturiolika);

const desimt1 = 10 && 15 > 10
console.log(desimt1); // true

const petrasIr = "Petras" && 0
console.log(petrasIr); //0

const petrasArba = ("Petras" || "Jonas") && (22 * 5 || 15 - 1 === 13)
console.log(petrasArba); //110

const jonas = "jonas" === "Jonas"
console.log(jonas);

const petrasPlus = "Petras" + 5 === "Petras" + "5" 
console.log(petrasPlus); //true

const jonas5 = "Jonas" + 5 + 5 === "Jonas10"
console.log(jonas5); //false

const penkiPlusAntanas = 5 + 10 + "Antanas" === "15Antanas"
console.log(penkiPlusAntanas); //true

const duPlusJonas = 2 + 1 + "Jonas" + 3 + 2 === "3Jonas5"
console.log(duPlusJonas); //false

const likutis = 10 % 1 === 1
console.log(likutis); //
const penkiKart = 5 * "5" === 25
console.log(penkiKart); //true


// ......2 užduotis praktika su if-elsefif-else
//...1 dalis

const clientAge = 35;
const legalAge = 20;

if (clientAge >= legalAge) {
   console.log(`Pasiekes ${legalAge}]`); 
    
} else { 
    console.log(`Nepasiekes ${legalAge}`);    

}
//....2dalis

const name = "Migleepe"
if (name.length > 6) {
    console.log("Ilgas vardas");

}

// .... 3dalis

const myAge = 55

if  (myAge >= 100  || myAge <= 0 ) {
    console.log("Invalid age");

} else if (myAge  < 18  ) {
    console.log("Child");
}
    else  {
console.log("Adult");
    }


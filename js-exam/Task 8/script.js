/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (a, b) {
    return a + b;
  };

  this.subtraction = function (a, b) {
    return a - b;
  };

  this.multiplication = function (a, b) {
    return a * b;
  };
  this.division = function (a, b) {
    return a / b;
  };
}

const calculator = new Calculator();

const sumRes = calculator.sum(5, 3);
const substrRes = calculator.subtraction(5, 3);
const multiplicRes = calculator.multiplication(5, 3);
const divisionRes = calculator.division(9, 3);

console.log("Suma: ", sumRes);
console.log("Skirtumas: ", substrRes);
console.log("Daugyba: ", multiplicRes);
console.log("Dalyba: ", divisionRes);

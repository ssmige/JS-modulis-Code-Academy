// Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad būtų lengva keist.

const ageInput = document.querySelector("#ageInput");

const h1 = document.querySelector("h1");

ageInput.addEventListener("input", ticketPrice);

function ticketPrice(event) {
  event.preventDefault();

  const age = ageInput.value;

  let price = 6;

  if (age < 16) {
    price *= 0.5;
  }
  if (age > 60) {
    price = price - price / 3;
  }
  h1.textContent = `Kaina ${price} eur.`;
}

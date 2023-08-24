// ...........1 pratimas
//Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  addNameToTable() {
    const nameColumn = document.createElement("td");
    nameColumn.textContent = this.name;
    const surnameColumn = document.createElement("td");
    surnameColumn.textContent = this.surname;
    const tr = document.createElement("tr");
    tr.append(nameColumn, surnameColumn);
    document.querySelector("table > tbody").append(tr);
  }
}
const fullNameInput = document.querySelector("#fullName");
const form = document.querySelector("form");
console.log(form);
const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
const button = document.querySelector("button");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = fullNameInput.value;

  const [name, surname] = fullName
    .split(" ")
    .map((namePart) => capitalize(namePart.trim()));

  const person = new Person(name, surname);
  person.addNameToTable();
});

// .............2 pratimas
// Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e) kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi alert išmesti kainą.

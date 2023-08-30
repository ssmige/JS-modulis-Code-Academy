//.......1 pratimas
//Parašykite metodą klasėje, kuris pasakys ar žmogus yra pilnametis ar ne, pagal jo amžių.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    return this.age >= 18
      ? `${this.name} is old enough to drink`
      : `${this.name} is not old enough to drink`;
  }
}

const p1 = new Person("Petras", 16);
// console.log(p1.compareAge());

//..........2 pratimas
//2. Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.
// pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]

const numLetters = [1, 5, "a", "g", "z", 6];

const filteredNum = numLetters.filter((element) => typeof element === "number");

// console.log(filteredNum);

//........... 3 pratimas
//3. Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
// pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"

const person = ["Petras 123 Slekys"];

for (let i = 0; i < arr.length; i++) {}
const dubbleLetters = person.dublicate(letter);

console.log(dubbleLetters);

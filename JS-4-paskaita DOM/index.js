// console.log(window.innerHeight);

// document.body.style.backgroundColor = "red";

// console.log(document.body.classList);

const h1 = document.getElementById("someID");
// console.log(h1);
h1.style.color = "green";
h1.style.backgroundColor = "blue";

// let textContent = h1.textContent;
// // textContent += "Kazkas papildomo";
// h1.textContent = textContent;

// h1.textContent = "Kazkas papildomo";
// console.log(textContent);

const h1Query = document.querySelector("#someID");
console.log(h1Query);

const divs = document.getElementsByTagName("div");
console.log(divs);

const divsQuery = document.querySelectorAll("div");
console.log(divsQuery);

const divsWithClass = document.getElementsByClassName("pirma");
console.log(divsWithClass);

const divsWithClassQuery = document.querySelectorAll(".pirma");
console.log(divsWithClassQuery);

const divsWithName = document.getElementsByName("treciasDiv");
console.log(divsWithName);

const h2InDiv = document.querySelector("div > h2");
console.log(h2InDiv);

const obj = {
  name: "Marius",
  lastName: "nanankj",
  age: 26,
  parents: ["Pirmas tevas", "jkalkjds"],
  car: {
    year: 2000,
    make: "Audio",
    sedynes: {
      pirmaSedyne: "yra",
      antraSedyne: "nera",
    },
  },
};
console.log(obj.lastName);
obj.car.sedynes.antraSedyne = "Atsirado";
console.log(obj.car.sedynes.antraSedyne);

const arr = [1, 2, 3];

arr[2] = 10;
console.log(arr);

console.log(obj.lastName);
obj.lastName = "Kazkas kito";
console.log(obj.lastName);

console.log(obj);

obj.address = "Kazkoks adresas";
console.log(obj);

delete obj.name;
console.log(obj);

const number = Math.abs(-15);
console.log(number);

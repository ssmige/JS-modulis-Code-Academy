import multipliply from "./multi.js";

import { addHeaderToApp } from "./header.js";

import { addCarsListToApp } from "./cars.js";

// 1uzduotis
const num1 = 6;
const num2 = 6;
const result = multipliply(num1, num2);

// console.log(result);

//2uzduotis
const app = document.body;

// 3 uzduotis
const div = document.querySelector("div");

// const app = document.body; // Galite pasirinkti kitą app elementą, jei reikia.
addHeaderToApp(div);
addCarsListToApp(app);

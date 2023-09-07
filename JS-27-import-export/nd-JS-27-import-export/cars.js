// 3. Pridėkite dar vieną modulį, pavadinimu cars.js. Šis turės funkciją, kuri taip pat pasiims app ir nieko negrąžins (t.y. turinį pridės prie app.innerHTML). Tačiau šį kartą - funkcija viduj turės array (["BMW", "VW", "AUDI", "MB"]). O su innerHTML bus map metodas panaudotas ant array, kuris atvaizduos <ul> tag'e sugeneruos po kiekvieną automobilį <li> elemente (t.y.
//<ul>
//${array.map((item) => <li></li>}
//</ul>)

// export function addCarsListToApp(app) {
//   const cars = ["BMW", "VW", "AUDI", "MB"];

//   const carsListHTML = `
//   <ul>
//   ${cars.map((car) => `<li>${car}</li>`)}
//   </ul>)
//   `;

//   //   const li = document.createElement("li");
//   //   li.textContent = car;
//   //   container.append(li);

//   //   return container;
//   app.innerHTML = carsListHTML;
// }

export function addCarsListToApp(app) {
  const carsArray = ["BMW", "VW", "AUDI", "MB"];

  const carsListHTML = `
      <ul>
        ${carsArray.map((car) => `<li>${car}</li>`).join("")}
      </ul>
    `;

  app.innerHTML += carsListHTML;
}

//  BASE URL = https://robust-safe-crafter.glitch.me/

//Sukuriame du puslapius (index.html ir add.html) - CSS frameworką naudoti galima, tačiau rekomenduotina daryti su custom CSS.
const divCard = document.querySelector("#houseCard");
const main = document.querySelector("main");

// const imgInput = document.querySelector("#img");
// const priceInput = document.querySelector("#price");
// const descriptionInput = document.querySelector("#description");
// const cityInput = document.querySelector("#city");
// const buttonAddProperty = document.querySelector("#addProperty");
// console.log(priceInput);

// buttonAddProperty.addEventListener("click", async () => {
//   const img = imgInput.value;
//   const price = price.value;
//   const descriptionInput = description.value;
//   const city = cityInput.value;
//   try {
//     const response = await fetch("https://robust-safe-crafter.glitch.me/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         image,
//         city,
//         price,
//         description,
//       }),
//     });
//     if (response.ok) {
//       console.log(pavyko);
//       getHouses();
//     } else {
//       alert("Something wrong");
//       console.log("Something wrong");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

async function getHouses() {
  divCard.innerHTML = "";
  try {
    const response = await fetch("https://robust-safe-crafter.glitch.me/");
    if (response.ok) {
      const houses = await response.json();
      console.log(houses);
      houses.forEach((house) => {
        const img = document.createElement("img");
        img.src = house.image;
        const price = document.createElement("p");
        price.textContent = `€ ${house.price}`;
        const city = document.createElement("p");
        city.textContent = house.city;
        const description = document.createElement("p");
        description.textContent = house.description;
        divCard.append(img, price, city, description);
        main.append(divCard);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

getHouses();

//  BASE URL = https://robust-safe-crafter.glitch.me/

//Sukuriame du puslapius (index.html ir add.html) - CSS frameworką naudoti galima, tačiau rekomenduotina daryti su custom CSS.

const HOST = "https://robust-safe-crafter.glitch.me/";

const container = document.querySelector(".container");

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

// async function getHouses() {
//   // houseCard.innerHTML = "";
//   try {
//     const response = await fetch(HOST);
//     if (response.ok) {
//       const houses = await response.json();
//       houses.forEach((house) => {
//         generateHouseCard(house);
//       });
//     } else {
//       alert("Failed to fetch");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getHouses() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const houses = await response.json();
      houses.forEach((house) => {
        console.log(houses);
        generateHouseCard(house);
      });
    } else {
      alert("Failed to fetch");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}

// function generateHouseCard(house) {
//   const houseCard = document.createElement("div");
//   productCard.classList.add("houseCard");

//   const img = document.createElement("img");
//   img.src = house.image;

//   const price = document.createElement("h3");
//   price.textContent = `€ ${house.price}`;

//   const city = document.createElement("p");
//   city.textContent = house.city;

//   const description = document.createElement("p");
//   description.textContent = house.description;

//   houseCard.append(img, price, city, description);
//   container.append(houseCard);
// }

function generateHouseCard(house) {
  const productCard = document.createElement("div");
  productCard.classList.add("houseCard");

  const image = document.createElement("img");
  image.src = house.image;

  const pTitle = document.createElement("p");
  pTitle.textContent = house.city;

  const price = document.createElement("h3");
  price.textContent = "€ " + `${product.price}`;

  const description = document.createElement("p");
  price.textContent = house.description;

  productCard.append(image, pTitle, price, description);
  container.append(houseCard);
}

getHouses();

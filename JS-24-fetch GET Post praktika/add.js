// const divCard = document.querySelector("#houseCard");

const imgInput = document.querySelector("#img");
const priceInput = document.querySelector("#price");
const descriptionInput = document.querySelector("#description");
const cityInput = document.querySelector("#city");
const buttonAddProperty = document.querySelector("#addProperty");
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // const img = imgInput.value;
  const price = priceInput.value;
  const description = descriptionInput.value;
  // const city = cityInput.value;

  console.log(price, description);
  try {
    const response = await fetch("https://robust-safe-crafter.glitch.me/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price,
        description,
      }),
    });

    if (response.ok) {
      console.log(pavyko);
    } else {
      alert("Something wrong");
      console.log("Something wrong");
    }
  } catch (error) {
    console.log(error);
  }
});

// async function getHouses() {
//   divCard.innerHTML = "";
//   try {
//     const response = await fetch("https://robust-safe-crafter.glitch.me/");
//     if (response.ok) {
//       const houses = await response.json();
//       console.log(houses);
//       houses.forEach((house) => {
//         const img = document.createElement("img");
//         img.src = house.image;
//         const price = document.createElement("h3");
//         price.textContent = `€ ${house.price}`;
//         const city = document.createElement("h5");
//         city.textContent = house.city;
//         const description = document.createElement("p");
//         description.textContent = house.description;
//         divCard.append(img, price, city, description);
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// getHouses();

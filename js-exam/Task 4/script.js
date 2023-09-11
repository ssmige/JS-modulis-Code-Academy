/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const HOST = "cars.json";

const output = document.querySelector("#output");

async function showBrandAndModels() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const cars = await response.json();
      cars.forEach((car) => {
        generateCarCard(car);
      });
    } else {
      alert("Failed to fetch");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}

function generateCarCard(car) {
  const card = document.createElement("div");
  card.classList.add("card");

  const pBrand = document.createElement("h3");
  pBrand.textContent = car.brand;

  const pModels = document.createElement("p");
  pModels.textContent = car.models;

  card.append(pBrand, pModels);
  output.append(card);
}

showBrandAndModels();

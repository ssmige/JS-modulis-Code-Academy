//BASE URL = https://olive-bead-glazer.glitch.me

// 1. Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL.
// 2. Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
// 3. Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
// 4. Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir patikrinkite ar įrašyti duomenys atsivaizduoja :)

const div = document.querySelector("div");
const body = document.querySelector("body");

const carsTable = document.querySelector("table");
const thead = document.querySelector("thead");
const thBrand = document.querySelector("brand");
const thModel = document.querySelector("model");
const tbody = document.querySelector("tbody");
const inputBrand = document.querySelector("#input-brand");
const inputModel = document.querySelector("#input-model");
const buttonSubmit = document.querySelector("button");

buttonSubmit.addEventListener("click", async () => {
  const brand = inputBrand.value;
  const model = inputModel.value;
  try {
    const response = await fetch("https://olive-bead-glazer.glitch.me/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brand,
        model,
      }),
    });
    if (response.ok) {
      const p = document.createElement("p");
      p.textContent = "Successful";
      body.append(p);

      getCars();
    } else {
      const p = document.createElement("p");
      p.textContent = "Something wrong";
      body.append(p);
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
});

async function getCars() {
  tbody.innerHTML = "";
  try {
    const response = await fetch("https://olive-bead-glazer.glitch.me/");
    if (response.ok) {
      const cars = await response.json();
      console.log(cars);
      cars.forEach((car) => {
        const tdBrand = document.createElement("td");
        tdBrand.textContent = `${car.brand} `;

        const tdModel = document.createElement("td");
        tdModel.textContent = `${car.model}`;
        const tr = document.createElement("tr");
        tr.append(tdBrand, tdModel);

        tbody.append(tr);
      });
    } else {
      console.log("Something wrong");
    }
  } catch (error) {
    console.log(error);
  }
}
getCars();

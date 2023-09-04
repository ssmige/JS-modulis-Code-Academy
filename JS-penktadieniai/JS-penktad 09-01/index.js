// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me
// 1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
// 2. Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
// 3. Pridėkite prie lentelės (tarp id ir name) nuotrauką.
// 4. Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
// 5. Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.
let rows = {};
function createTable() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");

  const thId = document.createElement("th");
  thId.textContent = "Id";
  const thName = document.createElement("th");
  thName.textContent = "First name";
  const thlastName = document.createElement("th");
  thlastName.textContent = "last Name";

  const thCity = document.createElement("th");
  thCity.textContent = "City";
  const thFavColor = document.createElement("th");
  thFavColor.textContent = "Favorite Color";

  thead.append(thId, thName, thlastName, thCity, thFavColor);
  table.append(thead);
  document.body.append(table, document.createElement("tbody"));
}

createTable();
const tbody = document.querySelector("tbody");

function putInTable(data) {
  tbody.innerHTML = "";
  data.forEach((robot) => {
    const fullName = data.name.split(" ");
    const tdId = document.createElement("td");
    tdId.textContent = data.id;

    const tdName = document.createElement("td");
    tdName.textContent = fullname[0];
    const tdlastName = document.createElement("td");
    tdlastName.textContent = fullName[1];
    const tdCity = document.createElement("td");
    tdCity.textContent = data.city;
    const tdFavColor = document.createElement("td");
    tdFavColor.textContent = data.fav_color;
    const tr = document.createElement("tr");
    tr.append(tdId, tdName, tdCity, tdFavColor);
    tbody.append(tr);
  });
}

putInTable();

async function getRobots() {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me/");
    if (response.ok) {
      const robots = await response.json();

      putInTable(robots);
    }
  } catch (error) {
    console.log(error);
  }
}
getRobots();

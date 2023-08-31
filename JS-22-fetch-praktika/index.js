//https://magnetic-melon-yam.glitch.me
//
// 1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
// 2. Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
// 3. Pridėkite prie lentelės (tarp id ir name) nuotrauką.
// 4. Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
// 5. Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.

const state = {};

const createCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "isVipChecked");
  document.body.append(checkbox);

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", "isVipChecked");
  checkboxLabel.textContent = "VIP";
  document.body.append(checkboxLabel);
};

const createSearchInput = () => {
  const input = document.createElement("input");
  input.setAttribute("id", "search");
  input.setAttribute("type", "search");
  input.setAttribute("name", "search");
  document.body.append(input);

  const button = document.createElement("button");
  button.setAttribute("id", "searchButton");
  button.textContent = "Search for name";
  document.body.append(button);

  const form = document.createElement("form");
  form.append(input, button);
  document.body.append(form);
};

const createTable = () => {
  const id = document.createElement("th");
  id.textContent = "ID";

  const img = document.createElement("th");
  img.textContent = "Image";

  const firstName = document.createElement("th");
  firstName.textContent = "First Name";

  const lastName = document.createElement("th");
  lastName.textContent = "Last Name";

  const city = document.createElement("th");
  city.textContent = "City";

  const favCalor = document.createElement("th");
  favCalor.textContent = "Fav color";

  const tr = document.createElement("tr");
  tr.append(id, img, firstName, lastName, city, favCalor);

  const thead = document.createElement("thead");
  thead.append(tr);

  const table = document.createElement("table");
  table.append(thead, document.createElement("tbody"));
  document.body.append(table);
};

function putInTable(robots) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  robots.forEach((robot) => {
    const tdId = document.createElement("td");
    tdId.innerText = robot.id;

    const img = document.createElement("img");
    img.src = robot.image;

    const [name, surname] = robot.name.split(" ");

    const firstName = document.createElement("td");
    firstName.textContent = name;

    const lastName = document.createElement("td");
    lastName.textContent = surname;

    const tdCity = document.createElement("td");
    tdCity.textContent = robot.city;

    const tdFavColor = document.createElement("td");
    tdFavColor.textContent = robot.fav_color;

    const tr = document.createElement("tr");
    tr.append(tdId, img, firstName, lastName, tdCity, tdFavColor);
    tbody.append(tr);
  });
}

createCheckbox();
createSearchInput();
createTable();

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const searchString = document.getElementById("search").value.toLowerCase();
  putInTable(
    state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchString)
    )
  );
});

document.querySelector("#isVipChecked").addEventListener("change", (event) => {
  putInTable(
    event.target.checked
      ? state.robots.filter((robot) => robot.vip)
      : state.robots
  );
});

async function fetchRobo() {
  try {
    let response = await fetch("https://magnetic-melon-yam.glitch.me");
    if (response.ok) {
      state.robots = await response.json();
      putInTable(state.robots);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchRobo();

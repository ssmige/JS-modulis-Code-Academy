/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const output = document.querySelector("#output");
const button = document.querySelector("#btn");
const outputCointainer = document.querySelector(".output-cointainer");
const pMessage = document.querySelector("#message");

button.addEventListener("click", async () => {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const people = await response.json();
      people.forEach((user) => {
        generatePersonCard(user);
        pMessage.style.display = "none";
      });
    } else {
      alert("Failed to fetch");
    }
  } catch (error) {
    alert("Something went wrong");
  }
});

function generatePersonCard(person) {
  const card = document.createElement("div");

  const pLogin = document.createElement("h3");
  pLogin.textContent = person.login;

  const avatar = document.createElement("img");
  avatar.src = person.avatar_url;

  card.append(pLogin, avatar);
  output.append(card);
}
getPeople();

// ........ 1 pratimas
//Sukurk formą, kuri leis įrašyti vardą - jis bus išsaugojamas į cookies. Jei vardas jau egzistuoja - išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. Jei neegzistuoja - formą.

const nameInput = document.querySelector("#name");
const buttonDelete = document.querySelector("#delete");
const forma1 = document.querySelector("#forma1");

//....... 2 pratimas
//Į localStorage, įrašykite savo vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką. Informaciją įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite.

const personProfile = {
  firstName: "Kuku",
  lastName: "Maku",
  picture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbod9jJKCsNyk3MhtLN004x329WJkq33Rucg&usqp=CAU",
};

localStorage.setItem("personProfile", JSON.stringify(personProfile));

const body = document.querySelector("body");
const div = document.createElement("div");
const img = document.createElement("img");
const h3 = document.createElement("h3");
const p = document.createElement("p");
const h1 = document.createElement("h1");

h1.textContent = "2 pratimas:įrašyti į localStorage";
h3.textContent = `${personProfile.firstName}  ${personProfile.lastName}`;
p.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis enim eligendi facere suscipit cum distinctio nesciunt accusamus qui volupt tenetur ad in, beatae veniam, rerum dicta veritatis nemo. Tempora, a.";
img.src = personProfile.picture;
div.append(h1, img, h3, p);
body.append(div);

const localStoragePersonProfile = localStorage.getItem(
  JSON.parse(personProfile)
);

//....... 3 pratimas
//Sukurkite puslapį, kuriame būtų forma su vienu input - fullName. Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname). Vardą ir pavardę įdeda į objektą, o objektą - į array. Šį array išsaugo localStorage. Po forma sukurkite lentelę joje atvaizduokite informaciją iš localStorage.

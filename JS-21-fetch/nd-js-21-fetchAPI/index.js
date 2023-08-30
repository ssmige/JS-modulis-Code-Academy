//......1. Jums paskambino pažinčių portalas – jiems reikia greitai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje. Duomenys galėtų būti atvaizduoti panašioje kortelėje. Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.

// const container = document.querySelector(".container");

// const person = (user) => {
//   const div = document.createElement("div");

//   const img = document.createElement("img");
//   img.src = user.picture.large;

//   const fullName = document.createElement("h3");
//   fullName.textContent = `${user.name.first} ${user.name.last}, ${user.dob.age} years old`;

//   const email = document.createElement("h4");
//   email.textContent = user.email;

//   div.append(img, fullName, email);
//   container.append(div);
// };

// const getPerson = async () => {
//   try {
//     const response = await fetch("https://randomuser.me/api/");
//     if (response.ok) {
//       const data = await response.json();
//       person(data.results[0]);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// getPerson();

//...........2 pratimas
//Naudojant https://party-wedding.glitch.me/v1/party - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?

const guestVip = (guests, guestName) => {
  const guest = guests.find(guest.name === guestName) 
  const 

  console.log(guest);
}

async function fetchGuests() {
  try {
    const response = await fetch("https://party-wedding.glitch.me/v1/party");
    if (response.ok) {
      const guest = await response.json();
      console.log(guest);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchGuests();

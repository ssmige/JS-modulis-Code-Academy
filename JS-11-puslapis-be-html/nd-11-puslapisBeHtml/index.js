const body = document.querySelector("body");
const div = document.createElement("div");
const img = document.createElement("img");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const p = document.createElement("p");

img.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcYWm2izf5HIihD6AlTbUjvOAUPDbTj0H_bg&usqp=CAU";

h1.textContent = "Trent Walton";
h2.textContent = "Founder & 1/3 of a paravelinc";
p.textContent = "Austin, TX";

div.append(img, h1, h2, p);
body.append(div);

body.style.backgroundColor = "#e5f0f7";

div.style.backgroundColor = "white";
div.style.width = "70%";
div.style.textAlign = "center";
div.style.margin = "10rem auto ";
div.style.border = "thick solid  ";
div.style.borderColor = "#dfeff8";
div.style.borderRadius = "0.8rem";
div.style.color = "grey";
div.style.fontFamily = "sans-serif";

img.style.borderRadius = "50%";
img.style.border = "1px solid #eee";
img.style.width = "10rem";
img.style.height = "10rem";
img.style.marginTop = "-5rem";

p.style.fontSize = "1.5rem";

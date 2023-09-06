const HOST = "https://sophisticated-humane-dandelion.glitch.me";

const container = document.querySelector(".container");

async function getProducts() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const products = await response.json();
      products.forEach((product) => {
        generateProductCard(product);
      });
    } else {
      alert("Failed to fetch");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}

function generateProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("productCard");

  const image = document.createElement("img");
  image.src = product.image;

  const pTitle = document.createElement("p");
  pTitle.textContent = product.title;

  const price = document.createElement("h3");
  price.textContent = "€ " + `${product.price}`;

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Ištrinti";

  btnDelete.addEventListener("click", async () => {
    try {
      const response = await fetch(HOST + `/${product.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        productCard.remove();
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.log(error);
    }
  });

  productCard.append(image, pTitle, price, btnDelete);
  container.append(productCard);
}

getProducts();

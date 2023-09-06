const HOST = "https://sophisticated-humane-dandelion.glitch.me";

const imgInput = document.querySelector(".img");
const titleInput = document.querySelector(".title");
const priceInput = document.querySelector(".price");
const submitButton = document.querySelector("button");
const form = document.querySelector("form");

async function postNewProduct() {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const image = imgInput.value;
    const title = titleInput.value;
    const price = priceInput.value;

    try {
      const response = await fetch(HOST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image,
          title,
          price,
        }),
      });
      if (response.ok) {
        // alert("Produktas sėkmingai įdėtas");
        //redirect???
      } else {
        alert("kažkas negerai");
      }
    } catch (error) {
      console.log(error);
    }
  });
}

postNewProduct();

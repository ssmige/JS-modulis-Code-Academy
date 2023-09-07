// Sukurkite modulį pavadinimu header.js. Šiame modulyje bus funkcija, kuri paims app kaip argumentą, tačiau nieko negrąžins. Šios funkcijos tikslas - į app.innerHTML pridėti (t.y. +=) header'io kodą (pasirašykite standartinį HTML su inline CSS). Šį modulį importuokite į pagrindinį file'ą ir paduokite app, kuris bus document.body. Taip, puslapio viršuje turėtų atsivaizduoti header'is, kuris importuotas iš header.js.

export function addHeaderToApp(app) {
  const headerHTML = `
  <header style="background-color: rgb(251, 186, 88);
      display: flex;  justify-content: flex-start;  align-items: center;  padding: 30px; 
      h1 style="color: rgb(192, 30, 221);
      padding-left: 50px;
      margin: 0;">
   
      <img style = " width: 100px;"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU"
        alt="logo"
      />
      <div>
        <h1 style="color: rgb(192, 30, 221);
        padding-left: 30px;
        margin: 0;">Puikusis puslapis</h1>
        <h3 style="color: rgb(192, 30, 221);
        padding-left: 30px;
        margin: 0;">Nuostabiai veikia</h3>
      </div>
      

    </header>

`;

  app.innerHTML += headerHTML;
}

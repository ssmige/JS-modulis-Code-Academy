/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const clickMeBtn = document.querySelector("#btn__element");
const output = document.querySelector("#btn__state");

let clickCount = 0;

clickMeBtn.addEventListener("click", function () {
  clickCount++;

  output.textContent = clickCount;
});

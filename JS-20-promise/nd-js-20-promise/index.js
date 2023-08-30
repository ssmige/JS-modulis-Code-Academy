// ...........1 pratimas
// Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut - daugiau apie jį čia.

// s
// ............ 2 pratimas
//Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.
const prom2 = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;
  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 1000);
});
prom2
  .then(() => alert("yes, veikia 2"))
  .catch(() => alert("Oops, kažkas negerai"));

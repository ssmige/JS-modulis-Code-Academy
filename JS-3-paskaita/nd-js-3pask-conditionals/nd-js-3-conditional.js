//.....Switch sąlygos
// .....1 užduotis

const car = "Audi";
switch (car) {
  case "VW":
    console.log("VWW Group");
    break;
  case "Audi":
    console.log("VWW Group");
    break;

  case "Bentley":
    console.log("VWW Group");
    break;
  case "Bugatti":
    console.log("VWW Group");
    break;
  case "Lamborghini":
    console.log("VWW Group");
    break;
  case "Porche":
    console.log("VWW Group");
    break;
  case "BMV":
    console.log("BMV Group");
    break;

  case "Mini":
    console.log("BMV Group");
    break;
  case "Rolls-Royce":
    console.log("BMV Group");
    break;
  default:
    console.log("Nei vienai");
    break;
}

// ....2 užduotis

const userinput = "bazilikas";
switch (userinput) {
  case "Obuolys":
  case "Kriaušė":
  case "Persikas":
  case "Slyva":
  case "Granatas":
    console.log("vaisius");
    break;
  case "Morka":
  case "Burokėlis":
  case "Kopūstas":
  case "Bulvė":
  case "Agurkas":
    console.log("daržovė");
    break;
  default:
    console.log("nei vaisius nei daržovė");
    break;
}

// ....3 užduotis

let weekDay = new Date().getDay();

switch (weekDay) {
  case 0:
    weekDay = "Sekmadienis";
    break;
  case 1:
    weekDay = "Pirmadienis";
    break;
  case 2:
    weekDay = "Antradienis";
    break;
  case 3:
    weekDay = "Trečiadienis";
    break;
  case 4:
    weekDay = "Ketvirtadienis";
    break;
  case 5:
    weekDay = "Penktadienis";
    break;
  case 6:
    weekDay = "Šeštadienis";
    break;
}
console.log(weekDay);

//........Ternary Operatorius

//.....1 užduotis

const name = "Migle";
length = name.length < 5 ? "Short Name" : "Long Name";
console.log(length);

// ..... 2 užduotis

const legalAge = "18";
const clientAge = "16";
canDrive = clientAge >= legalAge ? "Can Drive" : "Can't Drive";
console.log(canDrive);

// ......3 užduotis

const legalAge1 = "18";
let clientAge1 = "1220";
clientAge1 =
  clientAge1 < 0 || clientAge1 > 120
    ? "Invalid Age"
    : (clientAge1 = clientAge1 >= legalAge1 ? "Can Drive" : "Can't Drive");
console.log(clientAge1);

// ......4 užduotis

// .............. ...Loops
//.....1 užduotis

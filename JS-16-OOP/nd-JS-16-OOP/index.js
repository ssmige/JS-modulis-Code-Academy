//......1 pratimas

//Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.

class Car {
  constructor(brand, model, engine, price) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = price;
  }
  turnOn(car) {
    alert("vrooom!");
  }
  getPrice(car) {
    let priceByEngine = 0;
    if (this.engine === "electric") {
      priceByEngine = 10000;
    } else if (this.engine === "diesel") {
      priceByEngine = 5000;
    }
    return this.basePrice + priceByEngine;
  }
}

const bmw = new Car("BMW", "X6", "electric", 40000);
console.log(bmw.getPrice());

const peugout = new Car("Peugout", "3008", "diesel", 40000);
console.log(peugout.getPrice());

//......2 pratimas
//Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

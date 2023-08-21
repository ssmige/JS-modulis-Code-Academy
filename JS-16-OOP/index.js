class Book {
  constructor(title) {
    this.title = title;
  }

  logTitle() {
    console.log(this.title);
  }
}

// const altoriuSesely = new Book("Altorių šešėly");

// altoriuSesely.logTitle();
// console.log(altoriuSesely.title);

class Library {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];
  }

  addNewBook(book) {
    this.books.push(book);
  }
}

const martynoMazvydo = new Library("Martyno Mazvydo", "prie seimo");
const kvepalai = new Book("Kvepalai");

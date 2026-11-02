const Book = require("./Book");
const EBook = require("./EBook");

const book1 = new Book("Іван Котляревський", "Енеїда", 1798);
const book2 = new Book("Тарас Шевченко", "Кобзар", 1840);
const book3 = new Book("Ольга Кобилянська", "Земля", 1901);
const book4 = new EBook("Іван Котляревський", "Енеїда", 1798, "PDF");


try {
    book1.name = "";
} catch (error) {
    console.log(error.message);
}

try {
    book2.author = "";
} catch (error) {
    console.log(error.message);
}

try {
    book3.published = 0;
} catch (error) {
    console.log(error.message);
}

try {
    book4.fileFormat = "DOC";
} catch (error) {
    console.log(error.message);
}

book1.printInfo();
book2.printInfo();
book3.printInfo();
book4.printInfo();


console.log(book1.name);
book1.published = 1800;
book1.printInfo();

const books = [book1, book2, book3, book4];
const oldestBook = Book.getOldestBook(books);
console.log("Найдавніша книга:");
oldestBook.printInfo();

const book5 = EBook.fromBook(book2, "PDF");
console.log("Нова електронна книга:");
book5.printInfo()
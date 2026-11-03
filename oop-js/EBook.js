const Book = require("./Book");

class EBook extends Book {
    constructor(author, name, published, fileFormat) {
        super(author, name, published);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (value !== "PDF") {
            throw new Error("Невірний формат файлу");
        }
        this._fileFormat = value;
    }


    static fromBook(book, fileFormat) {
        return new EBook(book.author, book.name, book.published, fileFormat);
    }


    printInfo() {
        console.log(`"${this.name}", автор: ${this.author}, рік видання: ${this.published}, формат: ${this.fileFormat}`);
    }
}


module.exports = EBook;
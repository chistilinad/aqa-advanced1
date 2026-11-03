class Book {
    constructor(author, name, published) {
        this.author = author;
        this.name = name;
        this.published = published;
    }

    static getOldestBook(books) {
        let oldest = books[0];
        for (const book of books) {
            if (book.published < oldest.published) {
                oldest = book;
            }

        }
        return oldest;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Назва має бути непорожнім рядком");
        }
        this._name = value;
    }


    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Автор має бути непорожнім рядком");
        }
        this._author = value;
    }


    get published() {
        return this._published;
    }

    set published(value) {
        if (typeof value !== "number" || value <= 0) {
            throw new Error("Рік має бути додатним числом");
        }
        this._published = value;
    }



    printInfo() {
        console.log(`"${this.name}", автор: ${this.author}, рік видання: ${this.published}`);
    }
}


module.exports = Book;





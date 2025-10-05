import { Book } from "./book.js";

export class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, pageNum) {
        const book = new Book(title, pageNum);
        this.books.push(book);
    }

    deleteBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
}

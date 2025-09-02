class Book {
    constructor(title, pageNum) {
        this.title = title;
        this.pageNum = pageNum;
        this.id = crypto.randomUUID();
        this.isRead = false;
    }

    toggleRead() {
        this.isRead = !this.isRead;
    }

}

class Library {
    constructor() {
        this._books = [];
    }

    addBook(title, pageNum) {
        const book = new Book(title, pageNum);
        this._books.push(book);
    }

    deleteBook(id) {
        this._books = this.books.filter(book => book.id !== id);
    }

    get books() {
        return this._books;
    }
}

const myLibrary = new Library();

function displayBooks() {
    const libraryContainer = document.getElementById("library")
    libraryContainer.innerHTML = "";

    myLibrary.books.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.innerHTML = `
            <div>
              <h3 class="title">${book.title}</h3>
              <button type="button" data-id="${book.id}" class="read-button">Mark as Read</button>
            </div>
            <div>
              <p>${book.pageNum} pgs.</p>
              <button type="button" data-id="${book.id}" class="delete-button">del</button>
            </div>
        `;

        const readBtn = bookDiv.querySelector(".read-button");

        if (book.isRead) {
            bookDiv.classList.add("read");
            readBtn.textContent = "Mark as Unread"
        }

        readBtn.addEventListener("click", (e) => {
            const bookId = e.target.dataset.id;
            book.toggleRead();
            if (book.isRead) {
                bookDiv.classList.add("read");
                readBtn.textContent = "Mark as Unread"
            } else {
                bookDiv.classList.remove("read");
                readBtn.textContent = "Mark as Read"
            }
        })

        const deleteBtn = bookDiv.querySelector(".delete-button");
        deleteBtn.addEventListener("click", (e) => {
            const bookId = e.target.dataset.id;
            myLibrary.deleteBook(bookId);
            displayBooks();
        });

        libraryContainer.appendChild(bookDiv);
    });
}

const addBtn = document.getElementById("add-book-btn");
const dialog = document.getElementById("book-dialog");
const cancelBtn = document.getElementById("cancel-btn");
const submitBtn = document.getElementById("submit-btn");

addBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
});

submitBtn.addEventListener("click", () => {
    const title = document.getElementById("book-title").value;
    const pageNum = document.getElementById("book-page-count").value;

    myLibrary.addBook(title, pageNum);
    displayBooks();
});

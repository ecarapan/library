const myLibrary = [];

function Book(title, pageNum) {
    this.title = title;
    this.pageNum = pageNum;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, pageNum) {
    const book = new Book(title, pageNum);
    myLibrary.push(book);
}

function displayBooks() {
    const libraryContainer = document.getElementById("library")
    libraryContainer.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.pageNum}</p>
        `;

        libraryContainer.appendChild(bookDiv);
    });
}

const addBtn = document.getElementById("add-book-btn");
const dialog = document.getElementById("book-dialog");
const form = document.getElementById("book-form");
const cancelBtn = document.getElementById("cancel-btn");
const submitBtn = document.getElementById("submit-btn")

addBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
});

submitBtn.addEventListener("click", () => {
    const title = document.getElementById("book-title").value;
    const pageNum = document.getElementById("book-page-count").value;

    addBookToLibrary(title, pageNum);
    displayBooks();
});



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

document.getElementById("add-book-btn").addEventListener("click", () => {
    addBookToLibrary("hi", 24);
    addBookToLibrary("hi", 24);
    addBookToLibrary("hi", 24);
    addBookToLibrary("hi", 24);
    addBookToLibrary("hi", 24);
    addBookToLibrary("hi", 24);

    displayBooks();
});


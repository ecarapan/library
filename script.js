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
        bookDiv.id = book.id;

        bookDiv.innerHTML = `
            <h3 class="title">${book.title}</h3>
            <div>
              <p>${book.pageNum} pgs.</p>
              <button type="button" id="delete-btn">del</button>
            </div>
        `;

        libraryContainer.appendChild(bookDiv);
    });
}

const addBtn = document.getElementById("add-book-btn");
const dialog = document.getElementById("book-dialog");
const cancelBtn = document.getElementById("cancel-btn");
const submitBtn = document.getElementById("submit-btn");
const deleteBtn = document.getElementById("delete-btn");

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

deleteBtn.addEventListener("click", () => {
    const book = document.getElementById("id")
});

export function renderBook(book) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    if (book.isRead) {
        bookDiv.classList.add("read");
    }

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

    return bookDiv;
}

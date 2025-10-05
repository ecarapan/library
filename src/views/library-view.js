import { renderBook } from "./book-view.js";

export function renderLibrary(library) {
    const libraryContainer = document.getElementById("library");
    libraryContainer.innerHTML = "";

    library.books.forEach((book) => {
        const bookDiv = renderBook(book);
        libraryContainer.appendChild(bookDiv);
    });
}

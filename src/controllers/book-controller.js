import { renderLibrary } from "../views/library-view.js";

export function setupBookController(library) {
    document.getElementById("library").addEventListener("click", (e) => {
        if (e.target.classList.contains("read-button")) {
            const bookId = e.target.dataset.id;
            const book = library.books.find((b) => b.id === bookId);
            if (book) {
                book.toggleRead();
                renderLibrary(library);
            }
        }

        if (e.target.classList.contains("delete-button")) {
            const bookId = e.target.dataset.id;
            library.deleteBook(bookId);
            renderLibrary(library);
        }
    });
}

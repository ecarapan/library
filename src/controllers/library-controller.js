import { renderLibrary } from "../views/library-view.js";

export function setUpLibraryController(library) {
    const addBtn = document.getElementById("add-book-btn");
    const dialog = document.getElementById("book-dialog");
    const cancelBtn = document.getElementById("cancel-btn");
    const bookForm = document.getElementById("book-form");

    addBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    cancelBtn.addEventListener("click", () => {
        dialog.close();
    });

    bookForm.addEventListener("submit", () => {
        const bookTitle = document.getElementById("book-title");
        const bookPageCount = document.getElementById("book-page-count");

        bookTitle.setCustomValidity("");
        bookPageCount.setCustomValidity("");

        if (bookTitle.validity.valueMissing) {
            bookTitle.setCustomValidity("A title must be entered!");
            bookTitle.reportValidity();
            event.preventDefault();
            return;
        }

        if (bookPageCount.validity.valueMissing) {
            bookPageCount.setCustomValidity(
                "Please enter how many pages the book has!",
            );
            bookPageCount.reportValidity();
            event.preventDefault();
            return;
        }

        if (bookPageCount.validity.rangeOverflow) {
            bookPageCount.setCustomValidity(
                `Page count can’t be more than ${bookPageCount.max}.`,
            );
            bookPageCount.reportValidity();
            event.preventDefault();
            return;
        }

        const title = bookTitle.value;
        const pageNum = bookPageCount.value;
        library.addBook(title, pageNum);
        renderLibrary(library);
    });
}

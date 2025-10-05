import { renderLibrary } from "../views/library-view.js";

export function setUpLibraryController(library) {
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

        library.addBook(title, pageNum);
        renderLibrary(library);
    });
}

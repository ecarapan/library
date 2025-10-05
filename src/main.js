import { Library } from "./models/library.js";
import { setUpLibraryController } from "./controllers/library-controller.js";
import { setupBookController } from "./controllers/book-controller.js";
import { renderLibrary } from "./views/library-view.js";

const library = new Library();
renderLibrary(library);

setUpLibraryController(library);
setupBookController(library);

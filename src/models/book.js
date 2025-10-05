export class Book {
    constructor(title, pageNum) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.pageNum = pageNum;
        this.isRead = false;
    }

    toggleRead() {
        this.isRead = !this.isRead;
    }
}

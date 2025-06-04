// src/BorrowedBook.ts
import { Member } from "./Member";
import { Book } from "./Book";
import { Fine } from "./Fine";

export class BorrowedBook {
    [x: string]: any;
    public returnDate: Date | null = null;
    public fine: Fine | null = null;
    public isReturned = false;

    constructor(
        public member: Member,
        public book: Book,
        public borrowDate: Date = new Date(),
        public dueDate: Date = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
    ) {
        book.availableCopies--;
    }

    returnBook(returnDate: Date = new Date()): Fine | null {
        this.returnDate = returnDate;
        this.isReturned = true;
        this.book.availableCopies++;

        if (returnDate > this.dueDate) {
            const daysLate = Math.ceil((returnDate.getTime() - this.dueDate.getTime()) / (1000 * 60 * 60 * 24));
            this.fine = new Fine(this.member, this, daysLate * 0.5);
            return this.fine;
        }
        return null;
    }
}
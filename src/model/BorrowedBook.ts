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

  calculateFine(): Fine {
    const today = this.returnDate || new Date();
    const isLate = today > this.dueDate;
    const daysLate = isLate ? Math.ceil((today.getTime() - this.dueDate.getTime()) / (1000 * 3600 * 24)) : 0;
    const fineAmount = daysLate * 1.0; // $1 per day late
    this.fine = new Fine(fineAmount, false);
    return this.fine;
  }
}
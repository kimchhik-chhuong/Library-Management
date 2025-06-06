// src/model/Review.ts
import { Member } from "./Member";
import { Book } from "./Book";
import { BorrowedBook } from "./BorrowedBook";

export class Review {
    constructor(
        public member: Member,
        public book: Book,
        public rating: number, // 1-5 stars
        public comment: string,
        public date: Date = new Date(),
        public associatedBorrow?: BorrowedBook // Link to the borrowing
    ) {}
}





// src/Book.ts
import { Review } from "./Review";

export class Book {
    public availableCopies: number;
    public reviews: Review[] = [];

    constructor(
        public id: string,
        public title: string,
        public author: string,
        public category: string,
        public publicationYear: string,
        public isbn: string,
        public totalCopies: number,
        public format: string = "PHYSICAL"
    ) {
        this.availableCopies = totalCopies;
    }
}
// src/controller/LibraryController.ts
import { Member } from "../Member";
import { Book } from "../Book";
import { BorrowedBook } from "../BorrowedBook";
import util from 'util';

export class LibraryController {
    private members: Member[] = [];
    private books: Book[] = [];

    constructor() {
        this.initializeData();
    }

    private initializeData(): void {
        // Create sample members
        this.members = [
            new Member("1", "Chhik", "chhik@mail.com", "12345678", "123 Elm St")
        ];

        // Create sample books
        this.books = [
            new Book("B001", "1984", "George Orwell", "Dystopian", "1949", "1234567890", 5)
        ];
    }

    public simulateBorrowAndReview() {
        try {
            const member = this.members[0];
            const book = this.books[0];

            // Borrow the book
            console.log("Borrowing book...");
            const borrowedBook = member.borrowBook(book);
            console.log(util.inspect(borrowedBook, { depth: 5, colors: true }));

            // Return the book
            console.log("\nReturning book...");
            const fine = borrowedBook.returnBook();
            console.log(`Fine: $${fine ? fine.amount : 0}`);

            // Leave a review
            console.log("\nLeaving review...");
            const review = member.addReview(
                book,
                5,
                "This book changed my perspective on society!",
                borrowedBook
            );
            
            console.log("Review added:");
            console.log(util.inspect(review, { depth: 3, colors: true }));
            console.log(`Book now has ${book.reviews.length} reviews`);
        } catch (error) {
            console.error("Error in simulation:", error);
        }
    }
}

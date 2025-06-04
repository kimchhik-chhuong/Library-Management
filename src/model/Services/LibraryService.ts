import { Member } from "../Member";
import { Book } from "../Book";
import { BorrowedBook } from "../BorrowedBook";

export class LibraryService {
    // Member borrows a book
    borrowBook(member: Member, book: Book): BorrowedBook {
        return member.borrowBook(book);
    }

    // Member returns a book
    returnBook(member: Member, borrowedBook: BorrowedBook): number {
        const fine = borrowedBook.returnBook(); // Call returnBook on the BorrowedBook instance
        return fine ? fine.amount : 0;
    }

    // Other service methods...
}

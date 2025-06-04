import { User } from "./User";
import { BorrowedBook } from "./BorrowedBook";
import { Fine } from "./Fine";
import { Book } from "./Book";
import { Member } from "./Member";

export class Librarian extends User {
    login(email: string, password: string): boolean {
      throw new Error("Method not implemented.");
    }
    logout(): void {
      throw new Error("Method not implemented.");
    }
    updateProfile(info: object): void {
      throw new Error("Method not implemented.");
    }
    constructor(
        public staffId: number,
        public name: string,
        public email: string
    ) {
        super(email, "librarian_password"); // Assuming User requires email and password
    }

    getId(): number {
        return this.staffId;
    }

    getName(): string {
        return this.name;
    }

    viewBorrowedBooksByMember(member: Member): BorrowedBook[] {
        return member.borrowedBooks; // Note: changed from borrowBooks to borrowedBooks
    }

    checkAvailableCopies(book: Book): number {
        return book.availableCopies;
    }

    processReturn(borrowedBook: BorrowedBook): Fine | null {
        return borrowedBook.returnBook();
    }

    addBook(book: Book, collection: Book[]): void {
        collection.push(book);
    }

    removeBook(bookId: string, collection: Book[]): boolean {
        const index = collection.findIndex(b => b.id === bookId);
        if (index !== -1) {
            collection.splice(index, 1);
            return true;
        }
        return false;
    }
}
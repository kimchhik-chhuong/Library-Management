import { User } from "./User";
import { BorrowedBook } from "./BorrowedBook";
import { Fine } from "./Fine";
import { Book } from "./Book";
import { Member } from "./Member";

export class Librarian extends User {
  private staffId: number;
  private name: string;

  constructor(staffId: number, name: string) {
    super();
    this.staffId = staffId;
    this.name = name;
  }

  viewBorrowedBooksByMember(memberId: number): BorrowedBook[] {
    // TODO: Implement logic to return borrowed books by a member
    return [];
  }

  checkAvailableCopies(bookId: number): number {
    // TODO: Implement logic to check available copies of a book
    return 0;
  }

  processReturn(borrowedBookId: number): Fine {
    // TODO: Implement logic to process a book return and calculate Fine
    return new Fine(0, false);
  }

  addBook(book: Book): void {
    // TODO: Implement logic to add a book
  }

  removeBook(bookId: string): void {
    // TODO: Implement logic to remove a book
  }

  updateBookInfo(book: Book): void {
    // TODO: Implement logic to update book information
  }

  sendReminder(member: Member): void {
    // TODO: Implement logic to send a reminder to a member
  }

  notifyOverdueMembers(): void {
    // TODO: Implement logic to notify all overdue members
  }

  getId(): number {
    return this.staffId;
  }

  getName(): string {
    return this.name;
  }
}
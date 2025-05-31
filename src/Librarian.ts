import { User } from "./User";
import { BorrowedBook } from "./BorrowedBook";
import { Fine } from "./Fine";

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
    // TODO: Implement logic to process a book return and calculate fine
    return new Fine(0, false);
  }

  getId(): number {
    return this.staffId;
  }

  getName(): string {
    return this.name;
  }
}
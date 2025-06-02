import { User } from "./User";
import { BorrowedBook } from "./BorrowedBook";
import { Fine } from "./Fine";
import { Book } from "./Book";
import { Member } from "./Member";

export class Librarian extends User {
  getId(): number {
    throw new Error('Method not implemented.');
  }
  getName(): string {
    throw new Error('Method not implemented.');
  }
  login(email: string, password: string): boolean {
    throw new Error('Method not implemented.');
  }
  logout(): void {
    throw new Error('Method not implemented.');
  }
  updateProfile(info: object): void {
    throw new Error('Method not implemented.');
  }
  viewBorrowedBooksByMember(member: Member): BorrowedBook[] {
    return member.borrowBooks;
  }

  // checkAvailableCopies(book: Book): number {
  //   return book.availableCopies;
  // }

  // checkAvailableCopies(bookId: number): number {
  //   // TODO: Implement logic to check available copies of a book
  //   return 0;
  // }

  processReturn(borrowedBookId: number): Fine {
    // TODO: Implement logic to process a book return and calculate Fine
    return new Fine(0, false);
  }

  // addBook(book: Book): void {
  //   // TODO: Implement logic to add a book
  // }

  // removeBook(bookId: string): void {
  //   // TODO: Implement logic to remove a book
  // }

  // updateBookInfo(book: Book): void {
  //   // TODO: Implement logic to update book information
  // }

  // sendReminder(member: Member): void {
  //   // TODO: Implement logic to send a reminder to a member
  // }

  // notifyOverdueMembers(): void {
  //   // TODO: Implement logic to notify all overdue members
  // }

  // addBook(book: Book): void {
  //   // TODO: Implement logic to add a book
  // }

  // removeBook(bookId: string): void {
  //   // TODO: Implement logic to remove a book
  // }

  // updateBookInfo(book: Book): void {
  //   // TODO: Implement logic to update book information
  // }

  // sendReminder(member: Member): void {
  //   // TODO: Implement logic to send a reminder to a member
  // }

  // notifyOverdueMembers(): void {
  //   // TODO: Implement logic to notify all overdue members
  // }

  // getId(): number {
  //   return this.staffId;
  // }

  // getName(): string {
  //   return this.name;
  // }
}
// import { User } from "./User";
// import { BorrowedBook } from "./BorrowedBook";
// import { Fine } from "./Fine";

// export class Librarian extends User {
//   login(email: string, password: string): boolean {
//     throw new Error("Method not implemented.");
//   }
//   logout(): void {
//     throw new Error("Method not implemented.");
//   }
//   updateProfile(info: object): void {
//     throw new Error("Method not implemented.");
//   }
//   private staffId: number;
//   private name: string;

//   constructor(staffId: number, name: string) {
//     super();
//     this.staffId = staffId;
//     this.name = name;
//   }

//   viewBorrowedBooksByMember(memberId: number): BorrowedBook[] {
//     // TODO: Implement logic to return borrowed books by a member
//     return [];
//   }

//   checkAvailableCopies(bookId: number): number {
//     // TODO: Implement logic to check available copies of a book
//     return 0;
//   }

//   processReturn(borrowedBookId: number): Fine {
//     // TODO: Implement logic to process a book return and calculate Fine
//     return new Fine(0, false);
//   }

//   getId(): number {
//     return this.staffId;
//   }

//   getName(): string {
//     return this.name;
//   }
// }



import { User } from './User';
import { Member } from './Member';
import { Book } from './Book';
import { BorrowedBook } from './BorrowedBook';

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

  checkAvailableCopies(book: Book): number {
    return book.availableCopies;
  }

  processReturn(borrowedBook: BorrowedBook): number {
    return borrowedBook.calculateFine().amount;
  }
}
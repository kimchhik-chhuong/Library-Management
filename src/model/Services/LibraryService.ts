import { Member } from '../Member';
import { Book } from '../Book';
import { BorrowedBook } from '../BorrowedBook';
import { Return } from '../Return';
import { Reservation } from '../Reservation';
import { Notification } from '../Notification';

export class LibraryService {
  borrowBook(member: Member, book: Book): BorrowedBook | string {
    if (!book.isAvailable()) {
      return 'Book is not available';
    }

    book.availableCopies -= 1;
    return member.borrowBook(book);
  }

  returnBook(member: Member, borrowedBook: BorrowedBook): number {
    const fine = member.returnBook(borrowedBook);
    borrowedBook.book.availableCopies += 1;
    return fine.amount;
  }

//   reserveBook(member: Member, book: Book): Reservation {
//     return new Reservation(member, book);
//   }

  notifyReservation(reservation: Reservation): Notification {
    return reservation.notifyMember();
  }
}

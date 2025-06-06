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
  // Notify next member in reservation queue if any
  this.notifyReservation(borrowedBook.book);
  return fine.amount;
}

reserveBook(member: Member, book: Book): { success: boolean; message: string } {
  // Check if the book is available
  if (book.availableCopies > 0) {
    return { success: false, message: 'Book is currently available. You can borrow it directly.' };
  }
  // Initialize reservations array if not present
  if (!book.reservations) {
    book.reservations = [];
  }
  // Check if member already reserved
  if (book.reservations.includes(member)) {
    return { success: false, message: 'You have already reserved this book.' };
  }
  // Add reservation
  book.reservations.push(member);
  // (Optional) Store reservation elsewhere if needed
  return { success: true, message: 'Reservation successful. You will be notified when the book is available.' };
}

// Call this when a book is returned and available
notifyReservation(book: Book) {
  if (book.reservations && book.reservations.length > 0 && book.availableCopies > 0) {
    const nextMember = book.reservations.shift();
    // Simulate notification
    if (nextMember) {
      console.log(`Notification: ${nextMember.fullName}, the book "${book.title}" is now available for you.`);
      // Optionally, mark the book as reserved for this member or auto-borrow
    }
  }
}
}

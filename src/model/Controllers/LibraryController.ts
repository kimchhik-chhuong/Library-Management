import { Member } from '../Member';
import { Book } from '../Book';
import { BookFormat } from '../BookFormat';
import { LibraryService } from '../Services/LibraryService';



class Librarian {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
export class LibraryController {
  public service = new LibraryService();

  simulateBorrowAndReturn() {
    const librarian = new Librarian ('Ms. Dara');
    

    
    const member = new Member('1', 'Chhik', 'chhik@mail.com', '12345678', '123 Elm St');
    const book = new Book('B001', '1984', 'George Orwell', 'Dystopian', '1949', '1234567890', BookFormat.PHYSICAL, 5, 5);

    console.log('Borrowing book...');
    console.log(`${librarian.name} is assisting member ${member.fullName} to borrow a book.`);
    const borrowed = this.service.borrowBook(member, book);
    console.log(borrowed);

    console.log('Returning book...');
    if (typeof borrowed !== 'string') {
      const fine = this.service.returnBook(member, borrowed);
      console.log(`Fine: $${fine}`);
    }
  }
  // Add inside LibraryController class

viewBorrowedBooksAndDueDates(member: Member) {
  if (member.borrowBooks && member.borrowBooks.length > 0) {
    member.borrowBooks.forEach(borrowed => {
      console.log(`Book: ${borrowed.book.title}, Due Date: ${borrowed.dueDate}`);
    });
  } else {
    console.log('No borrowed books.');
  }
}

// Add inside LibraryController class
viewAllBorrowedBooks(members: Member[]) {
  members.forEach(member => {
    if (member.borrowBooks && member.borrowBooks.length > 0) {
      console.log(`Member: ${member.fullName}`);
      member.borrowBooks.forEach(borrowed => {
        console.log(`  Book: ${borrowed.book.title}, Due Date: ${borrowed.dueDate}`);
      });
    }
  });
}


viewAvailableCopies(books: Book[]) {
  books.forEach(book => {
    console.log(`Title: ${book.title}, Available Copies: ${book.availableCopies}`);
  });
}


reserveBook(member: Member, book: Book) {
  const result = this.service.reserveBook(member, book);
  if (result.success) {
    console.log(`${member.fullName} has reserved the book: ${book.title}`);
  } else {
    console.log(`Reservation failed: ${result.message}`);
  }
}

// Test reservation logic - move this outside the class or into a static method
}

// Example usage (move this outside the class definition)
const controller = new LibraryController();

// Create members and a book with 0 available copies
const member1 = new Member('1', 'Alice', 'alice@mail.com', '123', 'Street 1');
const member2 = new Member('2', 'Bob', 'bob@mail.com', '456', 'Street 2');
const book = new Book('B001', '1984', 'George Orwell', 'Dystopian', '1949', '1234567890', BookFormat.PHYSICAL, 1, 0);

// Try to reserve the book for both members
console.log(controller.service.reserveBook(member1, book)); // Should succeed
console.log(controller.service.reserveBook(member2, book)); // Should succeed

// Simulate returning the book (should notify Alice)
book.availableCopies = 1;
controller.service.notifyReservation(book); // Should notify Alice

// Simulate returning the book again (should notify Bob)
book.availableCopies = 1;
controller.service.notifyReservation(book); // Should notify Bob

// Try to reserve again for Alice (should succeed since queue is empty)
console.log(controller.service.reserveBook(member1, book));



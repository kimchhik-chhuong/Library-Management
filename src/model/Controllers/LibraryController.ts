import { Member } from '../Member';
import { Book } from '../Book';
import { BookFormat } from '../BookFormat';
import { LibraryService } from '../Services/LibraryService';

export class LibraryController {
  private service = new LibraryService();

  simulateBorrowAndReturn() {
    const member = new Member('1', 'Chhik', 'chhik@mail.com', '12345678', '123 Elm St');
    const book = new Book('B001', '1984', 'George Orwell', 'Dystopian', '1949', '1234567890', BookFormat.PHYSICAL, 5, 5);

    console.log('Borrowing book...');
    const borrowed = this.service.borrowBook(member, book);
    console.log(borrowed);

    console.log('Returning book...');
    if (typeof borrowed !== 'string') {
      const fine = this.service.returnBook(member, borrowed);
      console.log(`Fine: $${fine}`);
    }
  }
}

<<<<<<< HEAD
export class Member {
    
=======
import { User } from './User';
import { BorrowedBook } from './BorrowedBook';
import { Review } from './Review';
import { Book } from './Book';
import { Fine } from './Fine';

export class Member extends User {
  constructor(
    private id: string,
    private fullName: string,
    private email: string,
    private phone: string,
    private address: string,
    private borrowBooks: BorrowedBook[] = [],
    private reviews: Review[] = []
  ) {
    super();
  }
    borrowBook(book: Book): BorrowedBook {
    const borrowed = new BorrowedBook(this, book, new Date(), new Date(), new Date(), new Fine());
    this.borrowBooks.push(borrowed);
    return borrowed;
  }

  returnBook(): Fine {
    return new Fine();
  }

  viewBorrowBooks(): BorrowedBook[] {
    return this.borrowBooks;
  }

  reviewBook(book: Book, rating: number, comment: string): Review {
    const review = new Review(this, book, rating, comment, new Date());
    this.reviews.push(review);
    return review;
  }

   getId(): number {
    return parseInt(this.id);
  }

  getName(): string {
    return this.fullName;
  }


>>>>>>> 91af826601550d2d37a70795e2c7968ba31460a9
}
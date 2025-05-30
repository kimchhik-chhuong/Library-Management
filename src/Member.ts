import { User } from './User';
import { BorrowedBook } from './BorrowedBook';
import { Review } from './Review';
import { Book } from './Book';
import { Fine } from './Fine';

export class Member extends User {
  constructor(
    public id: string,
    public fullName: string,
    public email: string,
    public phone: string,
    public address: string,
    public borrowedBooks: BorrowedBook[] = [],
    public reviews: Review[] = []
  ) {
    super();
  }

  borrowedBook(book: Book): BorrowedBook {
    const borrowed = new BorrowedBook(this, book, new Date(), new Date(), new Date(), new Fine());
    this.borrowedBooks.push(borrowed);
    return borrowed;
  }

  returnBook(): Fine {
    return new Fine();
  }

  viewBorrowedBooks(): BorrowedBook[] {
    return this.borrowedBooks;
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
}

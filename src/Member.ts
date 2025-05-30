import { User } from './User';
import { BorrowBook } from './BorrowBook';
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
    public borrowBooks: BorrowBook[] = [],
    public reviews: Review[] = []
  ) {
    super();
  }

  borrowBook(book: Book): BorrowBook {
    const borrowed = new BorrowBook(this, book, new Date(), new Date(), new Date(), new Fine());
    this.borrowBooks.push(borrowed);
    return borrowed;
  }

  returnBook(): Fine {
    return new Fine();
  }

  viewBorrowBooks(): BorrowBook[] {
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


}

<<<<<<< HEAD
import { User } from './User';
import { BorrowedBook } from './BorrowBook';
import { Review } from './Review';
import { Book } from './Books';
import { Fine } from './Fine';
=======
<<<<<<< HEAD
// import { User } from './User';
// import { BorrowBook } from './BorrowBook';
// import { Review } from './Review';
// // import { Book } from './Book';
// // import { Fine } from './Fine';

// export class Member extends User {
//   constructor(
//     public id: string,
//     public fullName: string,
//     public email: string,
//     public phone: string,
//     public address: string,
//     public borrowBooks: BorrowBook[] = [],
//     public reviews: Review[] = []
//   ) {
//     super();
//   }
=======
<<<<<<< HEAD
// import { User } from './User';
import { BorrowedBook } from './BorrowedBook';
=======
import { User } from './User';
import { BorrowBook } from './BorrowBook';
>>>>>>> 82319c145d9c8a40e98fd7d6b2aba95fbc827c6c
import { Review } from './Review';
// import { Book } from './Book';
// import { Fine } from './Fine';
>>>>>>> ec77f375f9176c9250b9ca31988c82a1b469ad87

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
>>>>>>> main

//   borrowBook(book: Book): BorrowBook {
//     const borrowed = new BorrowBook(this, book, new Date(), new Date(), new Date(), new Fine());
//     this.borrowBooks.push(borrowed);
//     return borrowed;
//   }

<<<<<<< HEAD
=======
<<<<<<< HEAD
//   returnBook(): Fine {
//     return new Fine();
//   }
=======
  viewBorrowBooks(): BorrowBook[] {
    return this.borrowBooks;
  }
>>>>>>> main

//   viewBorrowBooks(): BorrowBook[] {
//     return this.borrowBooks;
//   }

<<<<<<< HEAD
//   reviewBook(book: Book, rating: number, comment: string): Review {
//     const review = new Review(this, book, rating, comment, new Date());
//     this.reviews.push(review);
//     return review;
//   }
=======
>>>>>>> ec77f375f9176c9250b9ca31988c82a1b469ad87
   getId(): number {
    return parseInt(this.id);
  }
>>>>>>> main

//    getId(): number {
//     return parseInt(this.id);
//   }

<<<<<<< HEAD
}
=======
<<<<<<< HEAD
//   getName(): string {
//     return this.fullName;
//   }
// }
=======
}

<<<<<<< HEAD
=======
}
>>>>>>> 82319c145d9c8a40e98fd7d6b2aba95fbc827c6c
>>>>>>> main
>>>>>>> ec77f375f9176c9250b9ca31988c82a1b469ad87

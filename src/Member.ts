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
    public borrowBooks: BorrowedBook[] = [],
    public reviews: Review[] = []
  ) {
    super();
  }



  
}
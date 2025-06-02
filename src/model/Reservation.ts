import { Member } from './Member';
import { Book } from './Book';
import { Notification } from './Notification';

export class Reservation {
  notifyMember(): Notification {
      throw new Error('Method not implemented.');
  }
  constructor(
    public member: Member,
    public book: Book,
    public reservationDate: Date,
    public notified: boolean
  ) {}

//   notifyMember(): Notification {
//     return new Notification(this.member, "Book is now available", new Date());
//   }
}

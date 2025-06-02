import { Member } from './Member';
import { Book } from './Book';
export class Review {
    constructor(
    public member: Member,
    public book: Book,
    public rating: number,
    public comment: string,
    public reviewDate: Date = new Date()
  ) {}
}





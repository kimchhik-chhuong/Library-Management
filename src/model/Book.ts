import { BookFormat } from './BookFormat';
import { Review } from './Review';
import { Member } from './Member'; 

export class Book {
  public reservations: Member[] = []; 

  constructor(
    public id: string,
    public title: string,
    public author: string,
    public category: string,
    public publicationYear: string,
    public isbn: string,
    public format: BookFormat,
    public totalCopies: number,
    public availableCopies: number,
    public reviews: Review[] = []
  ) {
    this.reservations = []; // Initialize reservations
  }

  isAvailable(): boolean {
    return this.availableCopies > 0;
  }
}
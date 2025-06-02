import { BookFormat } from './BookFormat';
import { Review } from './Review';

export class Book {
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
  ) {}

  isAvailable(): boolean {
    return this.availableCopies > 0;
  }
}

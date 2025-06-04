// src/model/Fine.ts
import { Member } from "./Member";
import { BorrowedBook } from "./BorrowedBook";

export class Fine {
  constructor(
    public member: Member,
    public borrowedBook: BorrowedBook,
    public amount: number,
    public isPaid: boolean = false,
    public paymentDate: Date | null = null
  ) {}
}
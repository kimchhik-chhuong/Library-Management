import { BorrowedBook } from "./BorrowedBook";
import { Fine } from "./Fine";
export class Return {
    returnDate(returnDate: any) {
      throw new Error('Method not implemented.');
    }
    process(borrowedbook: BorrowedBook):Fine{
        borrowedbook.returnDate = new Date();
        return borrowedbook.calculateFine();
    }
}
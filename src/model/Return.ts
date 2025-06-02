import { BorrowedBook } from "./BorrowedBook";
import { Fine } from "./Fine";
export class Return {
    process(borrowedbook: BorrowedBook):Fine{
        borrowedbook.returnDate = new Date();
        return borrowedbook.calculateFine();
    }
}
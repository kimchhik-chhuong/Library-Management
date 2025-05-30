import { Book } from "./Book";
import { BorrowedBook } from "./BorrowedBook";

let borrowed = new BorrowedBook(
    'MemberA',
    'BookA',
    new Date('2024-05-01'), // borrow date
    new Date('2024-05-10'), // due date
    new Date('2024-05-15')  // return date
);

console.log("Fine amount: $" + borrowed.CalulateFine(new Date('2024-05-15')));

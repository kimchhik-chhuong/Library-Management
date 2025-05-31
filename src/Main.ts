<<<<<<< HEAD
import { BorrowedBook } from './BorrowedBook';

const borrowDate = new Date('2025-05-01');
const dueDate = new Date('2025-05-10');
const returnDate = new Date('2025-05-15'); // Returned 5 days late

const borrowedBook = new BorrowedBook(
    'John Doe',
    'The Great Gatsby',
    borrowDate,
    dueDate,
    returnDate
);

const fine = borrowedBook.CalculateFine(returnDate);
console.log(`The fine is: ${fine}`);
=======
import { Payment } from './Payment';
import { Fine } from './Fine';
import { Book } from "./Book";
import { BorrowedBook } from "./BorrowedBook";


const payment = new Payment(
    50,                      // amount
    new Date('2025-05-30'),  // payment date
    true                     // paid status
);

console.log(payment.getPaymentDetail());

const fine = new Fine(50, false);

console.log("Before payment: " + fine.getStatus());

fine.pay();

console.log("After payment: " + fine.getStatus());


let borrowed = new BorrowedBook(
    'MemberA',
    'BookA',
    new Date('2024-05-01'), // borrow date
    new Date('2024-05-10'), // due date
    new Date('2024-05-15')  // return date
);

console.log("Fine amount: $" + borrowed.CalulateFine(new Date('2024-05-15')));
>>>>>>> main

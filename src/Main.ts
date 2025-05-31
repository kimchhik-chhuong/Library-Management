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

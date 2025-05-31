import { BorrowedBook } from "./BorrowedBook";

export class Payment{
    constructor(
        private amount: number,
        private paymentdate: Date,
        private paid: boolean,
        // book: string,
        // borrowdate: Date,
        // duedate: Date,
        // returndate: Date,
        // fine= 0
    ){
        // super(book, borrowdate, duedate, returndate, fine);
    }

    public getPaymentDetail(): string{
        const status = this.paid ? 'Paid' : 'Not Paid';
        return `Amount: $${this.amount.toFixed(2)}, Date: ${this.paymentdate.toDateString()}, Status: ${status}`;
    }
}
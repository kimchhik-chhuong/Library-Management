export class Payment {
    constructor(
        private amount: number,
        private paymentdate: Date,
        private paid: boolean
    ){}

    public getPaymentDetail(): string{
        const status = this.paid ? 'Paid' : 'Not Paid';
        return `Amount: $${this.amount.toFixed(2)}, Date: ${this.paymentdate.toDateString()}, Status: ${status}`;
    }
}
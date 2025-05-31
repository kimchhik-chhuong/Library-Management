export class Fine {
    constructor(
        private amount: number,
        private paid: boolean
    ){}

    pay(): void {
        this.amount = 0;
        this.paid = true;
    }

    getStatus(): string {
        return this.paid ? "Paid" : `Unpaid - Amount: $${this.amount}`;
    }
    
}
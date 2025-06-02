export class Fine {
    constructor(
        public amount: number,
        public paid: boolean
    ){}

    pay(): void {
        this.amount = 0;
        this.paid = true;
    }

    getStatus(): string {
        return this.paid ? "Paid" : `Unpaid - Amount: $${this.amount}`;
    }

    
}
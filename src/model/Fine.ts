// src/Fine.ts
export class Fine {
    constructor(
        public amount: number,
        public isPaid: boolean,
        public paymentDate: Date | null = null
    ) {}

    pay(): void {
        this.isPaid = true;
        this.paymentDate = new Date();
    }
}
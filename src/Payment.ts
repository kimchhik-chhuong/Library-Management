export class Payment {
    constructor(
        private amount: number,
        private paymentdate: Date,
        private paid: boolean
    ){}

    public getPaymentDetail(): void{
    }
}
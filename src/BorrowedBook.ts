export class BorrowedBook {
    constructor(
        private duedate: Date,
        private returndate: Date,
        private fine: number = 0
    ) {}

    calculateFine(): number {
        const lateDays = Math.ceil(
            (this.returndate.getTime() - this.duedate.getTime()) / (1000 * 3600 * 24)
        );

        if (lateDays > 0) {
            const finePerDay = 10; // You can change this as needed
            this.fine = lateDays * finePerDay;
        } else {
            this.fine = 0;
        }

        return this.fine;
    }
}

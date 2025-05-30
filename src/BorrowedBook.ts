export class BorrowedBook {
    constructor(private member: string, 
        private book: string,
        private borrowdate: Date,
        private duedate: Date,
        private returndate: Date,
        private fine= 0)
        {}

        CalulateFine(returndate: Date): number{
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
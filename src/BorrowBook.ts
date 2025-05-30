export class BorrowBook {
    constructor(private member: string, 
        private book: string,
        private borrowdate: Date,
        private duedate: Date,
        private returndate: Date,
        private fine: number)
        {}
}
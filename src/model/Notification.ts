export class Notification {
    constructor(
        private member: string,
        private message: string,
        private datesend: Date
    ) {}

    public getNotificationDetail(): string {
        return `To: ${this.member}\nMessage: ${this.message}\nSent on: ${this.datesend.toDateString()}`;
    }

}

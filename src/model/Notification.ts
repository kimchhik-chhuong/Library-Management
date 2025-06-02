import { Member } from "./Member";

export class Notification {
    constructor(
        private member: Member,
        private message: string,
        private datesend: Date = new Date()
    ) {}

    public getNotificationDetail(): string {
        return `To: ${this.member}\nMessage: ${this.message}\nSent on: ${this.datesend.toDateString()}`;
    }

}

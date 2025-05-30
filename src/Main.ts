import { Payment } from './Payment';

const payment = new Payment(
    50,                      // amount
    new Date('2025-05-30'),  // payment date
    true                     // paid status
);

console.log(payment.getPaymentDetail());

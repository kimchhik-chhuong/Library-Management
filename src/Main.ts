import { Fine } from './Fine';

const fine = new Fine(50, false);

console.log("Before payment: " + fine.getStatus());

fine.pay();

console.log("After payment: " + fine.getStatus());

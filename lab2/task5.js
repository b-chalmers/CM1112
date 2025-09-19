const prompt = require("readline-sync");

let hourlyPay = prompt.questionFloat("Enter your hourly pay: ");
let hoursWorked = prompt.questionFloat("Enter your hours worked: ");
let overtimeHoursWorked = prompt.questionFloat("Enter your overtime hours worked: ");

let grossPay = hourlyPay * hoursWorked + (hourlyPay * 1.5 * overtimeHoursWorked);
let netPay = grossPay - grossPay * 0.2;

// the gross pay calculation is task 6!!!!

console.log("gross pay: £" + grossPay);
console.log("net pay: £" + netPay);
const prompt = require("readline-sync");
const pi = 3.14;

let radius = prompt.questionInt("Enter radius of circle: ");

console.log("diameter = " + radius * 2);
console.log("circumference = " + 2 * radius * pi);
console.log("area = " + pi * (radius ** 2));
const prompt = require("readline-sync");

let width = prompt.questionInt("Enter width: ");
let height = prompt.questionInt("Enter height: ");

console.log("area = " + width * height);
console.log("perimeter = " + (width * 2 + height * 2));
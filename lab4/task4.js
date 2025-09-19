const prompt = require("readline-sync");

let answer = Math.floor(Math.random() * 11);
let guess;

do {
	guess = prompt.questionInt("guess the number (0 - 10): ");
} while (guess != answer)
console.log("nice job");
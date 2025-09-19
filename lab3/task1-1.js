const prompt = require("readline-sync");

let answer = prompt.questionInt("enter number between 1 and 10: ");

if (answer >= 1 && answer <= 10) {
	console.log("well done");
} else {
	console.log("skill issue");
}
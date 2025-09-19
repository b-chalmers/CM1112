const prompt = require("readline-sync");
let numbers = [];
let total = 0;
let max = null;
let amount = prompt.questionInt("enter amount of numbers: ");

for (let i = 0; i < amount; i++) {
	let number = prompt.questionInt("enter number " + (i + 1) + ": ");

	numbers[i] = number;
	total += number;
	if (number > max || null) {
		max = number;
	}
}

console.log("total:", total);
console.log("average:", total / numbers.length);
console.log("largest:", max);
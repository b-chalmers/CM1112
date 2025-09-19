const prompt = require("readline-sync");
let numbers = [];
let total = 0;
let max = null;

for (let i = 0; i < 5; i++) {
	let number = prompt.questionInt("enter number: ");

	numbers[i] = number;
	total += number;
	if (number > max || null) {
		max = number;
	}
}

console.log("total:", total);
console.log("average:", total / 5);
console.log("largest:", max);
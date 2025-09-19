const prompt = require("readline-sync");
let numbers = [];

for (let i = 0; i < 5; i++) {
	numbers[i] = prompt.questionInt("enter number: ");
}

//console.log(numbers);
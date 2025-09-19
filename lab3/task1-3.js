const prompt = require("readline-sync");

let height = prompt.questionInt("enter your height (cm): ");
let age = prompt.questionInt("enter your age: ");

if (age > 15) {
	console.log("you can ride");
} else if (age < 16 && age >= 12) {
	if (height > 150) {
		console.log("you can ride");
	} else{
		console.log("you cant ride");
	}
} else {
	console.log("you cant ride");
}
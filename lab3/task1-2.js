const prompt = require("readline-sync");

let month = Number(prompt.question("enter month number: "));

if (isNaN(month)) {
	console.log("invalid input");
} else {
	if (month == 1 || month == 2 || month == 12) {
		console.log("it is winter");
	} else if (month >= 3 && month <= 5) {
		console.log("it is spring");
	} else if (month >= 6 && month <= 8) {
		console.log("it is summer");
	} else if (month >= 9 && month <= 11) {
		console.log("it is autumn");
	} else {
		console.log("invalid month number entered")
	}
}
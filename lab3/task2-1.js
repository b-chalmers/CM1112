const prompt = require("readline-sync");

let day = Number(prompt.question("enter day number: "));

if (isNaN(day)) {
	console.log("invalid input");
} else {
	switch (day) {
		case 1:
			console.log("monday");
			break;
		case 2:
			console.log("tuesday");
			break;
		case 3:
			console.log("wednesday");
			break;
		case 4:
			console.log("thrusday");
			break;
		case 5:
			console.log("friday");
			break;
		case 6:
			console.log("saturday");
			break;
		case 7:
			console.log("sunday");
			break;
		default:
			console.log("invalid day number entered");
	}
}
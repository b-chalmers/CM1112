const prompt = require("readline-sync");

function getNumber(message) {
	let userIn = prompt.question(message);
	while (isNaN(Number(userIn))) {
		console.log("Invalid number");
		userIn = prompt.question(message);
	}

	return userIn;
}

console.log(getNumber("give me something: "))
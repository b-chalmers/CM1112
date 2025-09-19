const prompt = require("readline-sync");

const numbers = [
	[1, 2, 3, 4, 5],
	[4435, 76, 75, 40, 68],
	[465, 996, 65, 42, 9877],
	[835, 3456, 4335, 40, 67],
	[44325, 6, 15, 54, 698]
]

let target;
while (true) {
	target = prompt.questionInt("find number: ");
	let found = false;

	for (let row of numbers) {
		for (let number of row) {
			if (number == target) {
				console.log("found number");
				found = true;
				break;
			}
		}
	}

	if (!found) {
		console.log("didnt find number");
	}
}	
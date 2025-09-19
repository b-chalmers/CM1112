const prompt = require("readline-sync");

let targetHeight = prompt.questionInt("enter triangle height: ");

for (let row = 0; row < targetHeight; row++) {
	stars = "*";
	for (let column = targetHeight - row - 1; column > 0; column--) {
		stars += "*";
	}

	console.log(stars);
}
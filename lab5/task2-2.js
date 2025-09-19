const prompt = require("readline-sync");

let targetHeight = prompt.questionInt("enter triangle height: ");

for (let row = 0; row < targetHeight; row++) {
	stars = "*";
	for (let column = 0; column < row; column++) {
		stars += "*";
	}

	console.log(stars);
}
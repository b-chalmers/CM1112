const prompt = require("readline-sync");

let targetHeight = prompt.questionInt("enter height: ");

for (let row = 0; row < targetHeight; row++) {
	let spaces = targetHeight - 1 - row
	let text = "";

	for (let i = 0; i < spaces; i++) {
		text += " ";
	}

	for (let i = 0; i < 1 + 2 * row; i++) {
		text += "*";
	}
	console.log(text)
}
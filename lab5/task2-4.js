const prompt = require("readline-sync");
const size = 80;

let grid = [];
for (let i = 0; i < size; i++) {
	grid[i] = []
}

for (let row = 0; row < size; row++) {
	for (let column = 0; column < size; column++) {
		let letter = "W";
		if (column % 2 == 0 && row % 2 == 1) {
			letter = "B";
		} else if (column % 2 == 1 && row % 2 == 0) {
			letter = "B";
		}
		grid[row][column] = letter;
	}
}

for (let row = 0; row < size; row++) {
	let rowText = "";
	for (let column = 0; column < size; column++) {
		rowText += grid[row][column];
	}
	console.log(rowText);
}
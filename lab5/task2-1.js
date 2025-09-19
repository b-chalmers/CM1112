const prompt = require("readline-sync");
let start = 1;
let end = 6;

for (let row = start; row < end; row++) {
	for (let column = start; column < end; column++) {
		console.log(`${row}x${column} = ${row*column}`);
	}
}
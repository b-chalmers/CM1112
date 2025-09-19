const prompt = require("readline-sync");

let startNumber = prompt.questionInt("enter start number: ");

for (let i = startNumber; i > 0; i--) {
	console.log(i);
}
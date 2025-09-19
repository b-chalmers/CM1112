const prompt = require("readline-sync");

let count = Number(prompt.question("number of *: "));
let starline = "";

if (isNaN(count)) {
	console.log("invalid input");
} else {
	while (count > 0) {
		starline += "*";
		count--;
	}
	console.log(starline)
}
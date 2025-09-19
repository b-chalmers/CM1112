const prompt = require("readline-sync");

let grade = Number(prompt.question("enter percentage: "));

if (isNaN(grade)) {
	console.log("invalid input");
} else if (grade > 100 || grade < 0) {
	console.log("invalid percentage");
} else {
	switch (true) {
		case grade >= 70:
			console.log("A");
			break;
		case grade >= 60:
			console.log("B");
			break;
		case grade >= 50:
			console.log("C");
			break;
		case grade >= 40:
			console.log("D");
			break;
		case grade >= 30:
			console.log("E");
			break;
		default:
			console.log("F");
	}
}
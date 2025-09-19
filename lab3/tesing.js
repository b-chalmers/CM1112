const prompt = require("readline-sync");

const grades = {0: "F", 30: "E", 40: "D", 50: "C", 60: "B", 70: "A"};
console.log(Object.entries(grades).sort(function(key1, key2) {return key1- key2}));

for (const [key, value] of Object.entries(grades).sort(function(key1, key2) {return key2 - key1})) {
  console.log(`${key}: ${value}`);
}

function getGrade(percentage) {
	if (percentage < 0 || percentage > 100) {
		return "invalid percentage";
	}

	for (const [threshold, letter] of Object.entries(grades).sort((key1, key2) => key2- key1)) {
		if (percentage >= threshold) {
			return letter;
		}
	}
}

while (true) {
	let grade = prompt.questionInt("enter percentage: ");
	if (grade == -1) {
		break;
	}

	console.log(getGrade(grade));
}
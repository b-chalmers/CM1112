const prompt = require("readline-sync");

let secondsIn = prompt.questionInt("Enter seconds: ");
let remaining = secondsIn;

let hours = 0;
let minutes = 0;
let seconds = 0;

while (remaining > 0) {
	if (remaining - 3600 >= 0) {
		hours++;
		remaining -= 3600;
	} else if (remaining - 60 >= 0) {
		minutes++;
		remaining -= 60;
	} else {
		seconds = remaining;
		remaining = 0;
	}
}

let text = "";
if (hours > 0) {
	let hourText = " Hour ";
	if (hours > 1) {
		hourText = " Hours ";
	}
	text += hours + hourText;
}
if (minutes > 0) {
	let minuteText = " Minute ";
	if (minutes > 1) {
		minuteText = " Minutes ";
	}
	text += minutes + minuteText;
}
let secondText = " Second";
if (seconds > 1) {
	secondText = " Seconds";
}
text += seconds + secondText;

console.log(text)
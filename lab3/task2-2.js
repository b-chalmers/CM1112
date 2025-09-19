const prompt = require("readline-sync");

console.log("1. New Game\n2. Load Game\n3. Settings\n4. Quit\n");
let selection = prompt.questionInt("");

switch (selection) {
	case 1:
		console.log("You selected New Game");
		break;
	case 2:
		console.log("You selected Load Game");
		break;
	case 3:
		console.log("You selected Settings");
		break;
	case 4:
		console.log("You selected Quit");
		break;
}
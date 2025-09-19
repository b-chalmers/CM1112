//task 5 and 6
const prompt = require("readline-sync");
let grid = [[null, null, null], [null, null, null], [null, null, null]];

let player = 0;
let won = false;

while (!won) {
	let valid = false
	let coords = [];
	while (!valid) {
		let input = prompt.question("player " + (player + 1) + ": coords (x, y) - ");
		let rawCoords = input.split(", ");

		// coord amount check
		if (rawCoords.length != 2) {
			console.log("invalid coords");
			continue;
		}

		// coord value check
		for (let i = 0; i < rawCoords.length; i++) {
			let rawCoord = Number(rawCoords[i]);
			if (isNaN(rawCoord)) {
				console.log("invalid coords");
				continue;
			}

			if (rawCoord > 3 || rawCoord < 1) {
				console.log("coords out of bounds");
				continue;
			}
		}

		// coord taken check
		//console.log(2 - (Number(rawCoords[1]) - 1), Number(rawCoords[0]) - 1)
		let location = grid[2 - (Number(rawCoords[1]) - 1)][Number(rawCoords[0]) - 1];
		if (location != null) {
			console.log("coord taken");
			continue;
		}

		valid = true;
		coords[0] = Number(rawCoords[0]) - 1;
		coords[1] = 2 - (Number(rawCoords[1]) - 1); // flip y
	}

	// assign spot
	let spotLetter = "X";
	if (player == 1) {
		spotLetter = "O";
	}
	grid[coords[1]][coords[0]] = spotLetter;


	// display grid
	for (let y = 0; y < 3; y++) {
		let rowText = "";
		for (let x = 0; x < 3; x++) {
			if (grid[y][x] == null) {
				rowText += "_";
			} else {
				rowText += grid[y][x];
			}
		}
		console.log(rowText);
	}

	// check for winners
	const letters =  ["X", "O"];
	for (let letter of letters) {
		// diagonal: top left -> bottom left
		if (grid[0][0] == letter && grid[1][1] == letter && grid[2][2] == letter) {
			won = true;
			break;
		}

		// diagonal: top right -> bottom right
		if (grid[0][2] == letter && grid[1][1] == letter && grid[2][0] == letter) {
			won = true;
			break;
		}

		// sideways
		for (let y = 0; y < 3; y++) {
			let amountValid = 0;
			for (let x = 0; x < 3; x++) {
				if (grid[y][x] == letter) {
					amountValid++;
				}
			}

			if (amountValid == 3) {
				won = true;
				break;
			}
		}
		
		// vertically
		for (let x = 0; x < 3; x++) {
			let amountValid = 0;
			for (let y = 0; y < 3; y++) {
				if (grid[y][x] == letter) {
					amountValid++;
				}
			}

			if (amountValid == 3) {
				won = true;
				break;
			}
		}
	}

	// switch player
	if (!won) {
		player++;
		if (player > 1) {
			player = 0;
		}

		// check for stalemate
		let stalemate = true;
		for (let y = 0; y < 3; y++) {
			for (let x = 0; x < 3; x++) {
				if (grid[y][x] == null) {
					stalemate = false;
				}
			}
		}

		if (stalemate) {
			console.log("stalemate!");
			break;
		}
	}
}

if (won) {
	console.log("player", player + 1, "won!");
}
let multiTable = [];

for (let y = 0; y < 10; y++) {
	multiTable[y] = [];
	for (let x = 0; x < 10; x++) {
		multiTable[y][x] = (y + 1) + "x" + (x + 1);
	}
}

console.log(multiTable); // not required
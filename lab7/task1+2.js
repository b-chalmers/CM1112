twoDArray = [
	[3, 6, 1, 12],
	[5, 2, 0, 7],
	[9, 1, 6, 3]
]; // task1 - make this list

for (let y = 0; y < twoDArray.length; y++) {
	let rowText = "";
	for (let x = 0; x < twoDArray[0].length; x++) {
		rowText += twoDArray[y][x] + " ";
	}
	console.log(rowText);
}
function bigmoney(amount) {
	console.clear();
	let text = "i got ";
	for (let i = 0; i < amount; i++)  {
		text += i + 1
		if (i != amount - 1) {
			text += ", "
		}
	}
	text += " m's in my bank account"
}

module.exports = {bigmoney};
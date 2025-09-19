function largest(a, b) {
	if (isNaN(a) || isNaN(b)) {
		console.log("invalid type provided");
		return null;
	}
	if (a > b) {
		return a;
	}
	return b;
}

console.log(largest(1, 10));
console.log(largest(15, 5));
console.log(largest(15, "5"));

// Write a function called largest(a, b) that accepts two numbers (a and b), and 
// returns the number that is the largest. Test this function by calling it 
// immediately below. You might want to include type checking to ensure it is
// indeed two numbers (and not any other types) that have been passed.
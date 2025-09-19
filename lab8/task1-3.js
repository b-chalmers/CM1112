function factorial(n) {
	if (isNaN(n)) {
		console.log("invalid argument");
		return 0;
	}

	let number = n;
	for (let i = n - 1; i > 0; i--) {
		number *= i;
	}
	return number;
}

console.log(factorial(12));

// Write a function called factorial(n) that returns the factorial of n. A factorial 
// is a number multiplied by all the numbers before it, down to one – for 
// example, the factorial of 5 is 5 x 4 x 3 x 2 x 1, or the factorial of 7 is 7 x 6 x 5 x 
// 4 x 3 x 2 x 1. You should include a check that ensures the parameter is a 
// number – and if it isn’t print an error message, and return 0.
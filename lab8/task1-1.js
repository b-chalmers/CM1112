function randomInt() {
	return Math.floor(Math.random() * 101);
}

console.log(randomInt());

// Write a function called randomInt() that returns a random integer (i.e. whole 
// number) between 0 and 100. Remember, random numbers will be decimals, 
// between 0 and 1 so you will need to multiply by 100, and use Math.floor() to 
// get an integer
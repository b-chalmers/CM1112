const prompt = require("readline-sync");

let total = 0;
let inputs = prompt.questionInt("number of inputs: ");

for (let i = 0; i < inputs; i++) {
	total += prompt.questionInt(`enter value ${i+1}: `);
}

console.log("average:", total / inputs);
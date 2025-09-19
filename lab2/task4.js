const prompt = require("readline-sync");

let name = prompt.question("Enter your name: ");

console.log("Hello " + name + "\nYour name contains " + name.length + " letters\nIt begins with " + name.charAt(0) + " and ends with " + name.charAt(name.length - 1));
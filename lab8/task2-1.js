// Create an object assigned to a variable called student with properties name, 
// course, and grade. Assign values to these properties inside the object. With 
// this object:
// a. Print the student’s grade.
// b. Update the grade to a new value.
// c. Print the updated grade

student = {
	name: "bob jones",
	course: "cooking",
	grade: "E"
}

console.log("grade:", student.grade);
student.grade = "B";
console.log("grade:", student.grade);
//  Create a car object with properties make, model, and year. 
// 		a. Write a function called displayCarInfo() that accepts a car object and 
// 		   prints a sentence in the following format:
//  		 This car is a <year> <make> <model>
// e.g. This car is a 2024 Renault Megane
// b. Test your function with the car you created.
// c. Create a second car object and pass it to the function.

// task 2-3
// Extend the previous task by writing a function called createCar() that 
// accepts the make, model, and year as parameters, then returns a new car 
// object populated with those values. You should include appropriate checks, 
// such as for a valid year. Test your function by calling it with various values, 
// then passing the returned object to the displayCarInfo() function.


// car1 = {
// 	make: "Volkswagen",
// 	model: "Golf Mk1",
// 	year: 1974
// }

// car2 = {
// 	make: "Kia",
// 	model: "Rio",
// 	year: 2014
// }

function createCar(make, model, year) {
	if (isNaN(year)) {
		console.log("invalid year");
		return null;
	}

	return {
		make: make,
		model: model,
		year: year
	};
}

function displayCarInfo(car) {
	console.log(`This car is a ${car.year} ${car.make} ${car.model}`);
}

car1 = createCar("Volkswagen", "Golf Mk1", 1974);
car2 = createCar("Kia", "Rio", 2014);


displayCarInfo(car1);
displayCarInfo(car2);
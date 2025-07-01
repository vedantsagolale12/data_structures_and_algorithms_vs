/** vedantsagolale12 */



/***
 * In JavaScript, almost "everything" is an object.
Objects are objects
Maths are objects
Functions are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
 */

/**
 * Objects : Using an Object Literal
Using the new Keyword
Using an Object Constructor
 * 
 */

// defination ,

const employee = {
  name: "John Doe",
  age: 23,
  designation: "Software Developer Engineer-I (SDE-I)",
  company: "Amazon",
  technology: "Mobile Application Developer",
};

console.log("-----------------------");

console.log(employee);
// call-by-properties
console.log(employee.technology);
console.log("-----------------------");
// by for-in-loop ,
for (let key in employee) {
  console.log(key); // name age designation company technology
}
console.log("-----------------------");
for (let value in employee) {
  console.log(employee[value]); // John Doe 23 Software Developer Engineer-I (SDE-I) Amazon Mobile Application Developer
}


/**
 * Using the new Keyword
 */

const car = new Object();
const _carModels = ["Audi", "BMW", "Honda", "Toyota"];

for (let i = 0; i < _carModels.length; i++) {
  car[i] = _carModels[i];
}
console.log("-----------------------");
console.log(car);


console.log("-----------------------");
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// Add Methods
person.fullName = function () {
  return this.firstName + " " + this.lastName + " " + this.age;
};

console.log(person.fullName());


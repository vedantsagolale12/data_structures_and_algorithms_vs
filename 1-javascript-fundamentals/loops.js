/** vedantsagolale12 */

/**
 * The for statement creates a loop with 3 optional expressions:
for (expression 1; expression 2; expression 3) {
  // code block to be executed
Expression 1 is executed (one time) before the execution of the code block.
Expression 2 defines the condition for executing the code block.
Expression 3 is executed (every time) after the code block has been executed.
}
 */

_forLoop = () => {
  // defination
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log("-----------------------");
  // loop scope
  // using var
  var i = 6;
  for (var i = 0; i < 10; i++) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
  }
  console.log("-----------------------");
  // using let
  //let i=3;
  for (let i = 0; i < 10; i++) {
    console.log("roger that !"); // error i is already defined
  }
};

/**
 * The JavaScript for in statement loops through the properties of an Object:
 * for (key in object) {
  // code block to be executed
}
 */

const employee = {
  name: "John Doe",
  age: 23,
  designation: "Software Developer Engineer-I (SDE-I)",
  company: "Amazon",
  technology: "Mobile Application Developer",
};

const employeeDates = [12, 23, 2, 10, 5, 21];

_forInLoop = () => {
  for (let key in employee) {
    console.log(key); // name age designation company technology
  }
  console.log("-----------------------");
  for (let value in employee) {
    console.log(employee[value]); // John Doe 23 Software Developer Engineer-I (SDE-I) Amazon Mobile Application Developer
  }
  console.log("-----------------------");
  i = 1;
  for (_date in employeeDates) {
    console.log(
      "Joined " + i + " company of this date " + employeeDates[_date]
    );
    i++;
  }
};

/**
 * Array.forEach()
 * The forEach() method calls a function (a callback function) once for each array element.
 * Note that the function takes 3 arguments:

The item value
The item index
The array itself
 */

_forEachLoop = () =>{
  const years = [2021 , 2022, 2023, 2024, 2025];
  let txt = "most cars launched in this following years :-";
  years.forEach(myFunction);
  function myFunction(value, index, array) {
    txt += " " + value;
  }
  console.log(txt+" !!!");
}


/**
 * The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, 
Syntax
for (variable of iterable) {
  // code block to be executed
}
variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
iterable - An object that has iterable properties.
 */

_forOfLoop = () => {
  const years = [2021 , 2022, 2023, 2024, 2025];
  let txt = "most cars launched in this following years :-";
  for (let year of years) {
    txt += " " + year;
  }
  console.log(txt+" !!!");
}

/**
 * variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
iterable - An object that has iterable properties.
 */

_whileLoop = () =>{
    i=5;
    while (i!=0) {
        console.log(i);
        i--;
    }
}


// usage :
//_forLoop();
// _forInLoop();
// _forEachLoop();
// _forInLoop();
// _whileLoop();

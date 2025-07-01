/** vedantsagolale12 */

/*
concept covered  : variables,functions,try-catch,operators(
arithmetic,logical,comparison,bitwise,assignment)
*/

/*
Assignment Operator = assigns values
Addition Operator + adds values
Multiplication Operator * multiplies values
Comparison Operator > compares values
*/

// assignment operator
function _assignment() {
  let x = 10; // assign value 10 to x
  return x;
}

// arithemtic operator
function _arithmetic(x = 10, y = 10, sign) {
  try {
    if (sign == "+") return x + y; // addition
    if (sign == "-") return x - y; // subtraction
    if (sign == "*") return x * y; // multiplication
    if (sign == "/") return x / y; // division
    return "Invalid sign";
  } catch (e) {
    return "Invalid input";
  }
}

// logical operator
function _logical(x = true, y = true, sign) {
  try {
    if (sign == "&&") return x && y; // and
    if (sign == "||") return x || y; // or
    return "Invalid sign";
  } catch (e) {
    return "Invalid input";
  }
}

// comparison operator
function _comparison(x = 10, y = 10, sign) {
  try {
    if (sign == ">") return x > y; // greater than
    if (sign == "<") return x < y; // less than
    if (sign == ">=") return x >= y; // greater than or equal to
    if (sign == "<=") return x <= y; // less than or equal to
    if (sign == "==") return x == y; // equal to
    if (sign == "!=") return x != y; // not equal to
    return "Invalid sign";
  } catch (e) {
    return "Invalid input";
  }
}

function _bitwise(x = 10, y = 10, sign) {
  try {
    if (sign == "&") return x & y; // and
    if (sign == "|") return x | y; // or
    if (sign == "^") return x ^ y; // xor
    if (sign == "<<") return x << y; // left shift
    if (sign == ">>") return x >> y; // right shift
    return "Invalid sign";
  } catch (e) {
    return "Invalid input";
  }
}

// example usage
console.log(_assignment()); // output: 10
console.log(_arithmetic(10, 5, "+")); // output: 15
console.log(_arithmetic(10, 5, "-")); // output: 5
console.log(_arithmetic(10, 5, "*")); // output: 50
console.log(_arithmetic(10, 5, "/")); // output: 2
console.log(_arithmetic(10, 0, "/")); // output: Infinity
console.log(_logical(true, false, "&&")); // output: false
console.log(_logical(true, false, "||")); // output: true
console.log(_comparison(10, 5, ">")); // output: true
console.log(_comparison(10, 5, "<")); // output: false
console.log(_comparison(10, 5, ">=")); // output: true
console.log(_comparison(10, 5, "<=")); // output: false
console.log(_comparison(10, 5, "==")); // output: false
console.log(_comparison(10, 5, "!=")); // output: true
console.log(_bitwise(10, 5, "&")); // output: 0
console.log(_bitwise(10, 5, "|")); // output: 15
console.log(_bitwise(10, 5, "^")); // output: 15
console.log(_bitwise(10, 2, "<<")); // output: 40
console.log(_bitwise(10, 2, ">>")); // output: 2
console.log(_bitwise(10, 0, ">>")); // output: 0
console.log(_bitwise(10, 1, ">>")); // output: 5
console.log(_bitwise(10, 2, ">>")); // output: 2
console.log(_bitwise(10, 3, ">>")); // output: 1
console.log(_bitwise(10, 4, ">>")); // output: 0
console.log(_bitwise(10, 5, ">>")); // output: 0
console.log(_bitwise(10, 6, ">>")); // output: 0
console.log(_bitwise(10, 7, ">>")); // output: 0
console.log(_bitwise(10, 8, ">>")); // output: 0
console.log(_bitwise(10, 9, ">>")); // output: 0
console.log(_bitwise(10, 10, ">>")); // output: 0

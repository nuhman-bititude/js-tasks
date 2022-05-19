// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

var read = require("readline-sync");

function check(number1, number2) {
  let sum = number1 + number2;
  if (sum === 50 || number1 === 50 || number2 == 50) {
    return true;
  } else {
    return false;
  }
}

number1 = Number(read.question("Enter Number 1 : "));
number2 = Number(read.question("Enter Number 2 : "));

console.log(check(number1, number2));

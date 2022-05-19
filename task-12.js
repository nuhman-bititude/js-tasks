// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative
var read = require("readline-sync");
function check(number1, number2) {
  if ((number1 < 0 && number2 > 0) || (number1 > 0 && number2 < 0)) {
    return true;
  } else return false;
}
number1 = Number(read.question("Enter the Number : "));
number2 = Number(read.question("Enter the Number : "));

console.log(check(number1, number2));
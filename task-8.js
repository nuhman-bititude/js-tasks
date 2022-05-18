// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference

var read = require("readline-sync");

function Difference(number) {
  let difference = number - 13;
  if (number > 13) {
    return difference * 2;
  } else {
    return difference;
  }
}
number = Number(read.question("Enter a number : "));
answer = Difference(number);
console.log(answer);

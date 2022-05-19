// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19
var read = require("readline-sync");

function Difference(number) {
  let difference = number - 19;
  if (number > 19) {
    return difference * 3;
  } else return difference;
}
var number = Number(read.question("Enter a Number : "));
console.log(Difference(number));

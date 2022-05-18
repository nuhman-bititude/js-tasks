// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

var read = require("readline-sync");

function Sum(num1, num2) {
  let sum = num1 + num2;
  if (num1 === num2) {
    return sum * 3;
  } else {
    return sum;
  }
}
num1 = Number(read.question("Enter Number 1 : "));
num2 = Number(read.question("Enter Number 2 : "));

ans = Sum(num1, num2);
console.log(ans);

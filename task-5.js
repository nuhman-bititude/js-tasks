var read = require("readline-sync");

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    default:
      console.log("Enter a Valid Operator!!!");
  }
}

operator = read.question("Specify an Operation  (+,-,/,*)  :");
num1 = Number(read.question("Enter Number 1: "));
num2 = Number(read.question("Enter Number 2: "));
calculator(num1, num2, operator);

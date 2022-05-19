// // Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

let checkNum = (number1, number2, number3) => {
  if (number1 < number2 && number2 < number3) {
    return "strict mode";
  } else if (number1 > number2 || number3 > number2) {
    return "soft mode";
  }
};

console.log(checkNum(22, 22, 31));
console.log(checkNum(10, 15, 31));

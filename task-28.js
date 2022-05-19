// Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

let checkNum = (number1, number2, number3) => {
  if (
    (number1 > 20 && (number1 < number2 || number1 < number3)) ||
    (number2 > 20 && (number2 < number1 || number2 < number3)) ||
    (number3 > 20 && (number3 < number1 || number3 < number2))
  ) {
    return true;
  } else return false;
};

console.log(checkNum(23, 76, 34));

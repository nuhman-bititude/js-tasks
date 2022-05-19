// Write a JavaScript program to check whether the last digit of the three given positive integers is same

function check(num1, num2, num3) {
  if (  
    num1 % 10 == num2 % 10 &&
    num2 % 10 == num3 % 10 &&
    num1 % 10 == num3 % 10
  ) {
    return "same";
  } else return "Not same";
}
console.log(check(17, 77, 1007));

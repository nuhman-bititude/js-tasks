// Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number
let factorial = (number) => {
  fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
};

let trailingZeros = (fact) => {
  count = 0;
  while (fact % 10 == 0) {
    rem = fact % 10;
    if (rem == 0) {
      count++;
    }
    fact = fact / 10;
  }
  return count;
};

fact = factorial(5);
console.log(trailingZeros(fact));

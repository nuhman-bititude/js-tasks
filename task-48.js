//Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number
let sumOfDigits = (number) => {
  let sum = 0;
  while (number) {
    reminder = number % 10;
    sum += reminder;
    number = Math.floor(number / 10);
  }
  return sum;
};
let countNumber = (number, sod) => {
  count = 0;
  while (number >= 10) {
    number = number / sod;
    count++;
  }
  return count;
};
number = 876;
sod = sumOfDigits(number);
console.log(sod);
count = console.log(countNumber(number, sod));

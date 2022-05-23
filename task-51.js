// Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer

let sumOfSeries = (n) => {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    sum = sum + n / Math.pow(2, i);
  }
  return sum;
};

console.log(sumOfSeries(3));

//  Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
primeNumber = [];
let prime = (limit) => {
  for (let i = 2; i < limit; i++) {
    flag = 0;
    for (j = 1; j <= limit; j++) {
      if (i % j == 0) {
        flag++;
      }
    }
    if (flag == 2) {
      primeNumber.push(i);
    }
  }
};
prime(100);
console.log(primeNumber);

// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3
let check = (array) => {
  if (array.includes(3) || array.includes(1)) {
    return "Array contain 1 or 3";
  } else return "Array does not cpntain 1 & 3";
};

console.log(check([1, 8, 99]));
console.log(check([84, 3, 9]));
console.log(check([5, 0, 6]));

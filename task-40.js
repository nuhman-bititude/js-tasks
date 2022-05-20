// Write a JavaScript program to rotate the elements left of a given array of integers of length 3

let rotateArray = (array) => {
  return [array[1], array[2], array[0]];
};
console.log(rotateArray([12, 5, 100]));
// Write a JavaScript program to find the kth greatest element of a given array of integers
let greatest = (array) => {
  let large = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > large) {
      large = array[i];
    }
  }
  return large;
};

console.log(greatest([1, 9, 4, 3, 9, 0, 6, 4, 6]));

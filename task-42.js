// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

array = [551, 1, 99, 587, 34, 671, 225, 552];
len = array.length;
let larger = (array) => {
  if (array[0] > array[len - 1]) return array[0];
  else return array[len - 1];
};

let replace = (large) => {
  for (let i = 0; i < len; i++) {
    array[i] = large;
  }
};

let large = larger(array);
replace(large);
console.log(array);

// Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.
let position = (array) => {
  len = array.length;
  if (array[0] == 1 && array[len - 1] == 1) {
    return "Both front and back contain 1";
  } else if (array[len - 1] == 1) {
    return "1 in Last position";
  } else if (array[0] == 1) {
    return "1 in First position";
  } else {
    return false;
  }
};
console.log(position([1, 54, 98, 00, 6784, 54, 1, 97, 1]));

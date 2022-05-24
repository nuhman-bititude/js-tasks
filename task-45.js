// Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements

let checkArray = (arr1, arr2) => {
  let res = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      res = true;
    } else {
      res = false;
    }
  }
  return res;
};

console.log(checkArray([12, 5, 77, 9], [12, 55, 77, 9]));

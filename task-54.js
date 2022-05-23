// Write a JavaScript program to check whether a given matrix is lower triangular or not.
// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.

let checkMatrix = (matrix) => {
  flag = true;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[i][j] != 0) {
        flag = false;
      } else {
        flag = true;
      }
    }
  }
  if (flag) {
    return "Not Lower Matrix";
  } else {
    return "Lower Matrix";
  }
};

console.log(
  checkMatrix([
    [1, 0, 0],
    [7, 2, 0],
    [84, 7, 1],
  ])
);
console.log(
  checkMatrix([
    [6, 6, 7],
    [0, 0, 5],
    [0, 0, 0],
  ])
);

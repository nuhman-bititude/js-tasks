// Write a JavaScript program to check whether a given matrix is an identity matrix.
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0],
// [0, 1, 0],
// [0, 0, 1]] -> true
//
// [[1, 0, 0],
// [0, 1, 0],
// [1, 0, 1]] -> false
let checkMatrix = (matrix) => {
  flag = true;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i === j && matrix[i][j] != 1) {
        flag = false;
      } else if (i != j && matrix[i][j] != 0) {
        flag = false;
      }
    }
  }
  if (flag) {
    return "Identity Matrix";
  } else {
    return "Not identity Matrix";
  }
};

console.log(
  checkMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);

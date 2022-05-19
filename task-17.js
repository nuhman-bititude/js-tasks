// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
function multiple(number) {
  if (number % 3 == 0 || number % 7 == 0) {
    return "Its a Multiple of 3 or 7";
  } else {
    return "Not a mulitiple of 3 or 7";
  }
}
console.log(multiple(21));

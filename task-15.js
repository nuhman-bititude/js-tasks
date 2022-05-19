// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1
function myFunction(string) {
  let length = string.length;
  let first = string.substring(0, 1);
  let middle = string.substring(1, length - 1);
  let last = string.substring(length - 1, length);
  newString = last + middle + first;
  return newString;
}
console.log(myFunction("Nuhman"));

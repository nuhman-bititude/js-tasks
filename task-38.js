// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

let convertString = (string) => {
  length = string.length;
  if (length > 3) {
    newString = string.substring(length - 3, length) + string;
    return newString;
  } else return null;
};

console.log(convertString("JavaScript"));

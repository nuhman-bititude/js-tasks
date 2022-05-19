// Write a JavaScript program to convert the letters of a given string in alphabetical order.

let alphabeticalOrder = (string) => {
  newString = string.split("");
  length = string.length;
  newString.sort();
  return newString.join("");
};
console.log(alphabeticalOrder("buqzadk"));

// Write a JavaScript program to capitalize the first letter of each word of a given string.
let capitalize = (string) => {
  newString = "";
  stringArray = string.split(" ");
  // console.log(stringArray)
  length = stringArray.length;
  for (let i = 0; i < length; i++) {
    // console.log(stringArray[i])
    len = stringArray[i].length;
    newString += stringArray[i].substring(0, 1).toUpperCase();
    newString += stringArray[i].substring(1, len);
    newString += " ";
  }
  return newString;
};

console.log(capitalize("this is a string for testing"));

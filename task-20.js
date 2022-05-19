// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one

function checkString(string) {
  length = string.length;
  if (string.indexOf("Script") == 4) {
    return string.substring(0, 4) + string.substring(10, length);
  } else {
    return string;
  }
}

console.log(checkString("JavaScript File for check"));

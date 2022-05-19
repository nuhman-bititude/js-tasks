// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back
function newString(string) {
  first = string.substring(0, 1);
  newString = first + string + first;
  return newString;
}

console.log(newString("Sample"));

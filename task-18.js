//  Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more

function newString(string) {
  let length = string.length;
  let last = string.substring(length - 3, length);
  let newstring = last + string + last;
  return newstring;
}

console.log(newString("Nuhman"));

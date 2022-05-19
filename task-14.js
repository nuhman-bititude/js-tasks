//  Write a JavaScript program to remove a character at the specified position of a given string and return the new string
function remove(string, position) {
  let length = string.length;
  newString = "";
  newString += string.substring(0, position);
  newString = newString + string.substring(position + 1, length);
  return newString;
}
console.log(remove("Bititude", 4));

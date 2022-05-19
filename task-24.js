// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case

let character = (string) => {
  let length = string.length;
  if (length < 3) {
    let newString =
      string.substring(0, 3).toLowerCase() + string.substring(3, length);
    return newString;
  } else {
    return string.toUpperCase();
  }
};

console.log(character("NuHmAn"));

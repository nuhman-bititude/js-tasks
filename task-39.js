// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.

let concatenateString = (string1, string2) => {
  len1 = string1.length;
  len2 = string2.length;
  if (len1 == len2) {
    return string1 + string2;
  } else {
    if (len2 > len1) {
      return string1 + string2.substring(0, len1);
    } else {
      return string1.substring(0, len2) + string2;
    }
  }
};

console.log(concatenateString("Bititude", "Techologies"));

// Write a JavaScript program to concatenate two strings except their first character

let concatenate = (string1, string2) => {
  len1 = string1.length;
  len2 = string2.length;
  return string1.substring(1, len1) + string2.substring(1, len2);
};

console.log(concatenate("Java", "Script"));

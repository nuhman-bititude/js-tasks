// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string

function check(string, search) {
  if (string.substring(2, 4) == search) {
    return "Strinf Found";
  } else {
    return "String no Found";
  }
}
console.log(check("JavaScript is Awesome", "va"));

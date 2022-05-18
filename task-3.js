// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar
var read = require("readline-sync");
function leapYear(year) {
  // console.log(typeof(year))
  if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
    console.log("Leap Year");
  } else {
    console.log("Not Leap Year");
  }
}

year = read.question("Enter a Year : ");
leapYear(Number(year));

// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values

function check(num1, num2) {
  differnce1 = 100 - num1;
  differnce2 = 100 - num2;
  if (differnce1 < differnce2) {
    return num1 + " Is Near to 100";
  } else {
    return num2 + " Is near to 100";
  }
}

console.log(check(9, 12));

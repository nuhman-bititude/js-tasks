// Write a JavaScript program to convert a given number to hours and minutes.

let hourMinute = (number) => {
  let hour = number / 60;
  let minute = number % 60;
  return "Hour:" + hour + " Minute: " + minute;
};

console.log(hourMinute(100));

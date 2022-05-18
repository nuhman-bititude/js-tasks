// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
var read = require("readline-sync");
var guess = Math.floor(Math.random() * 11);
// console.log(guess)
userGuessing = true;
while (userGuessing) {
  userGuess = Number(read.question("Ente Your Guess : "));
  if (userGuess == guess) {
    console.log("Good Work");
    userGuessing = false;
  } else {
    console.log("Not Match");
  }
}

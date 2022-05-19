// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string
var read = require("readline-sync");
function checkString(string) {
    if(string.startsWith("Py")){
        return string
    }
    else{
        return "Py"+string
    }
}
string = read.question("Enter a String : ");
console.log(checkString(string));

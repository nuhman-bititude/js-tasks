// Write a JavaScript program to count the number of vowels in a given string.
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let countVowels = (string) => {
  count = 0;
  length = string.length;
  for (let i = 0; i < length; i++) {
    if (vowels.includes(string[i])) {
      count += 1;
    }
  }
  return count;
};

console.log(countVowels("afepOmAAA"));

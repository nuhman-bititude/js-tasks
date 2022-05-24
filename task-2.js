// Write a JavaScript program to rotate the string 'bititude' in right direction by periodically removing one letter from the end of the string and attaching it to the front

let rotate = (string) => {
  for (let i = string.length - 1; i > 0; i--) {
    setInterval(() => {
      last = string.substring(i);
      console.log(last);
      //   newString = last + string.substring(0, string.length - i);
      //   console.log(newString);
    }, 2000);
  }
};

rotate("Bititude");
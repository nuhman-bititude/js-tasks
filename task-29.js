// Write a JavaScript program to reverse a given string

let reverseString=(string)=>{
    newString=""
    length=string.length
    for(let i=length-1;i>=0;i--){
        // console.log(string[i])
         newString=newString+string[i]
    }
    return newString
}
console.log(reverseString("Bititude"))
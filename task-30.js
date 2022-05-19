// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  

let characterChange=(string)=>{
    // console.log(string)
    newString=""
    length=string.length
    for(let i=0;i<length;i++){
        // console.log(string[i])
        let char=string[i]
        c=char.charCodeAt()
        // console.log(c)
        a=String.fromCharCode(c+1)
        newString=newString+a
        // console.log(a)
        // console.log(fromCharCode(char))
    }
    return newString
}
console.log(characterChange("Bititude"))
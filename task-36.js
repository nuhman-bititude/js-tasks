// Write a JavaScript program to extract the first half of a string of even length.
let extract=(string)=>{
    length=string.length
    if(length%2!=0){
        len=length/2
        return string.substring(0,len)
    }

}
console.log(extract("stringssi"))
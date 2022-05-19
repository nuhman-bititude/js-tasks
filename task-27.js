// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit

let myFunction=(number1,number2,number3)=>{
    if ((number1%10==number2%10)&&(number2%10==number3%10)&&(number1%10==number3%10)){
        return "Last Digits of all are equal"
    }
        else if((number1%10==number2)||(number2%10==number3)||(number1%10==number3%10)){
            return "Last digits of 2 numbers are equal"
        }
        else{
            return "Last digits are not Equal"
        }
    
}

console.log(myFunction(11,15,22))
// Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements


let checkArray=(array1,array2)=>{
    var flag=true
    for (let i=0;i<array1.length;i++){
        for(let j=i;j<array1.length;j++){
        temp=array2[i]
        array1[i]=array1[j]
        array1[j]=temp
        for(let k=0;k<array1.length;k++){
            if(array1[k]!=array2[k]){
                flag=false
                break
            }
        }
        array1[j]=array1[i]
        array1=temp
        }
        
    }
    if(flag){
        return true
    }
    else{
        return false
    }
}


console.log(checkArray([12,5,77,9],[12,55,77,9]))
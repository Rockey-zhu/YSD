
//[1,2,3]
//[1,2,4]
//输出124

function plusOne(digits){
    for(let i =digits.length-1;i>=0;i--){
        if(digits[i] != 9){
            digits[i]++
            return digits
        }else{
            digits[i] = 0;
        }
    }
    
    const result = [1,...digits];

    return result; 
}
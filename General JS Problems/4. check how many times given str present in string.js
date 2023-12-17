
// check how many times 2nd string is present in first string

function countRepeatition(str, str2){  
    let count=0;
    for(let i =1; i<str.length;i= i+3){
        if(str2 === str.substr(i-1,str2.length)){
            count++;
        }
    }
    return count;
}


// function gives longest country name from array

function longestStr(arr){
    let longest=arr[0].length;
    let str=""
    for(let i=0;i<arr.length;i++){
        if(longest<arr[i].length){
            longest = arr[i].length
            str=arr[i]
        }   
    }
    return str;
}

let country = ["Australia", "Germany", "United States of America"]

console.log(longestStr(country))

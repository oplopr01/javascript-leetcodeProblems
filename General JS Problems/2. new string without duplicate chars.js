
// func returning unique characters from a string
function uniqueChar(str){
    let uniqueChars ="";
    
    for(let i =0; i<str.length;i++){
        let currentChar= str[i];
        if(uniqueChars.indexOf(currentChar)==-1){
            uniqueChars= uniqueChars + str[i]; 
        }
    }
    return uniqueChars;
    }
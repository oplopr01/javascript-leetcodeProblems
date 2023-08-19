
// Write a function argumentsLength that returns the count of arguments passed to it.



var argumentsLength = function(...args) {
     
 
 //-----using .length method
 return args.length
     
 
 //-----USING while loop
 while (args[count]!==undefined){
    count++
}
 return count

};
argumentsLength(1, 2, 3); // 3

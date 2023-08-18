Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.



sol.->



var reduce = function(nums, fn, init) {

        //-------- Using FOR LOOP --------
    let accum = init
    for(let i=0;i<nums.length;i++){
         accum=fn(accum,nums[i])
    }
        return accum

        //--------- Using WHILE LOOOP -------
let index =0
let accum= init
while(init<nums.length){
    accum = fn(accum,nums[index])
    index++
}
return accum

}

let nums = [11,22,33,44]
let fn = function sum(accum, curr) { return accum + curr; }
let init = 0
console.log(reduce(nums,fn,init));


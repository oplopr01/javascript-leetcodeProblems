problem-:
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 


var once = function (fn) {
    var hasBeenCalled = false;
    let result
    return function (...args) {
        if (hasBeenCalled === false) {

            hasBeenCalled = true
            result = fn(...args)
            return result
        }   
         else {
    return undefined;
}
    }



};

let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1, 2, 3));//6

console.log(onceFn(2, 3, 6));//undefined
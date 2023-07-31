
// 4. write Map function

let arr = [1, 2, 3]
let newArr = []
var map = function (arr, fn, i = 0) {

    //Using for loop
          for( i;i<arr.length;i++){
             newArr.push(fn(arr[i],i))
        }
        return newArr
    };

    //Using recursion
    if (i === arr.length) {
        return newArr
    }
    newArr.push(fn(arr[i], i))
    return map(arr, fn, i + 1, newArr)
};

console.log(map(arr, plusI))
function plusI(n, i) { return n + i; }


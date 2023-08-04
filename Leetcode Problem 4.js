

arr = [0,10,20,30]
arr2 = [-2,-1,0,1,2]
fn1 = function greaterThan10(n) { return n > 10; }
fn2 = function firstIndex(n, i) { return i === 0; }
fn3 = function plusOne(n) { return n + 1}


var filter = function(arr, fn) {
    // let i=0
    // let filteredArr=[]
    // for(i;i<arr.length;i++){

    //     let a= (fn(arr2[i],i))
    //     if(a===true){
    //         filteredArr.push(arr2[i])
    //     }

    // }
    // return filteredArr
//----above code looks right but fn3 it's not working , which is showing even if we compare truthy returning func with strict comparision 
  // operator it will behave differently 
        const filteredArr = [];
        
        for (let i = 0; i < arr.length; i++) {
          if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
            
          }
        }
        
        return filteredArr;
    }
      




console.log(filter(arr2,fn3));


//  declaration of array
const arr = [1,2,3,4]

const arr2 = new Array(1,2,3,4)

// console.log(arr)
// console.log(arr2)

arr.push(10)   // add element to last of array
arr.push(20)

arr.pop()   // remove element from last of array

arr.unshift(100)    // add element at starting of array
arr.unshift(200)   
arr.shift()        // remove element from starting of array

//console.log(arr)


// console.log(arr)
// const newArray = arr.join()    // convert array elements into string stores in newArray
// console.log(newArray)      

// console.log(typeof(arr))    // array is an object in javascript
// console.log(typeof(newArray))



// slice 
console.log("A", arr)

const mya2= arr.slice(1,3)
console.log(mya2)
console.log("A", arr)


console.log("by splice operation")

const mya3 = arr.splice(1,3)   // removes elements from original array and change the original array 
  // here splice(1,3)  last index is inclusive

console.log(mya3)    
console.log(arr)   //  change in original array
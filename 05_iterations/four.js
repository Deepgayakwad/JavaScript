
const myObj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple",
}

// printing the keys by using for in loop 
for(const key in myObj){
   //  console.log(key)
}


// printing the object by using the for in loop
console.log("printing the object by using for in loop")
for(const key in myObj){
     console.log(`key is ${key} and value of key is ${myObj[key]}`)
}

// printing the array by using the for in loop
 console.log()
const arr = ["js","c++","py","java"]
for(const key in arr){   
     console.log(arr[key])     
}

console.log()

// here keys are indicate the indexes in javascript
for(const key in arr){
     console.log(key)
}


const coding = ["js","c++","py","java"]

const value = coding.forEach( (item) =>{
     console.log(item)

     return item    // for each loop does not return anything 
})

// console.log(value)  // gives undefined


// filter method 
const arr = [1,2,3,4,5,6,7,8,9,10]

const myNums = arr.filter( (num) => num >4)
console.log((myNums));


// different way of return the values from filter 
const values = arr.filter( (num) => { 
      return num >4
})
console.log((values));


// printing the values same as filter by using forEach loop

const numbers = []

arr.forEach( (item) => {
     
     if(item >4){
         numbers.push(item)
     }
})

console.log(numbers)


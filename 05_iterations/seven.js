// it return array of value +10
const arr = [1,2,3,4,5,6,7,8,9,10]

const value = arr.map((item) => item +10)
console.log(value)


// it return the array of boolean value according to the condition 
console.log()
const value1 = arr.map((item) => item >5)
console.log(value1)



// apply map over map over filter 
console.log()
const value2 =arr
       .map( (item) => item*10)
       .map( (item) => item+1)
       .filter(( item) => item >40)

console.log(value2)
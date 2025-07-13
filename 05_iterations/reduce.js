const arr = [1,2,3]

const value = arr.reduce( function (acc,currValue){

    console.log(`acc value is ${acc} and currValue is ${currValue}`)
      return acc + currValue
},0)

console.log(value)


// by using the arrow function 
const value2 = arr.reduce( (acc,currVal) => acc + currVal,0)
console.log(value2)
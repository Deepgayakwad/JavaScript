
const myDate = new Date();

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof(myDate))

const myDateCreated = new Date(2023,0,25)  // in javascript months are start from 0

console.log(myDateCreated.toDateString())

const myDateCreated1 = new Date(2023,0,25,5,3) 
console.log(myDateCreated1.toLocaleString())

const date = new Date("01-26-2023")  // MM-DD-YYYY
console.log(date.toLocaleString())

let myTimeStand = Date.now()

console.log(myTimeStand)    // this time gets in milliseconds
console.log(myDateCreated1.getTime())  // this time gets in milliseconds

console.log(Math.floor(Date.now()/1000))  // we get time upto now in seconds


let newDate = new Date()
console.log(newDate)

console.log(newDate.getMonth()) // starting from 0 0- january ,1- february like this
console.log(newDate.getMonth()+1)   //  add 1 to get actually month 

console.log(newDate.getDay())      // gives 1 - monday , 2- tuesday like this

// newDate.toLocaleString('default',{
//     weekday:"long";
// })
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++//

// stack memomry 

let value = 30
let value2=value

value2 = 50;

console.log(value)
console.log(value2)


//+++++++++++++++++++++++++++++++//


// heap memory 


let user = {
     email:"dipak@gmail.com"
}

let user2=user
user2.email = "vedant@gmail.com"

console.log(user.email)
console.log(user2.email)



// declaration of object 

const myUser = {
      
        name:"Dipak Gaikwad",
        age:20,
        email:"dipak@1234.com",
        isMarried:false,
        location:"Pune",
}

// printing the object 
// console.log(myUser)

// accessing the value of object

// console.log(myUser.email)
// console.log(myUser["email"]) 
 // console.log(typeof myUser.email)    // gives string 



 // accessing the value by using the symbol data type 

 const mySym = Symbol("key1")   // declaration of symbol
 const mySym1= Symbol("key2")

 const myUser2 = {
      
    name:"vedant",
    age:20,
    mySym:"mykey1",     // this is behave as normal key 
    [mySym1]:"myKey2",    // declaration of key by using the symbol
    isMarried:false,
    location:"Pune",
}

// console.log(myUser2.mySym)  // gives myKey1 but type of value is string 
// console.log(typeof myUser2.mySym)   // gives string as type of key 



// accessing the symbol  
// console.log(myUser2[mySym1])     
// console.log(typeof(myUser2[mySym1]))     // gives string as type of value
// console.log(myUser2)


// *********  changing the value of object ***********
// console.log("object before changing the name ")
// console.log(myUser2)
// myUser2.name = "vinay"

// console.log("object after changing the name ")
// console.log(myUser2)


// ***********  use of freeze *********

// Object.freeze(myUser2)
// myUser2.name = "atharv"   // no change in object due to freeze 
// console.log("object after freeze ")
// console.log(myUser2)  



 // functions in object 

 myUser2.greeting = function(){
      
       console.log("hello jsUser")
 }

 console.log(myUser2.greeting)
 console.log(myUser2.greeting())

 myUser2.greeting2 = function(){
      
    console.log(`hello jsUser, ${this.name}`)     // called as string interpolation
}

console.log(myUser2.greeting2())

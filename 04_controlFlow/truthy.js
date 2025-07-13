
const name="dipak"

if(name){
     console.log("hello")
}
else{
     console.log("hii")
}

// falsy values 
// false , "" , 0,-0 , null , undefined , NaN , BigInt 0n


const str = ""
if(str){
     console.log("hey")
}
else{
     console.log("hello JavaScript")
}


// truthy values
//  true , "0" , " " , 'false' , [] , {}, function(){}

// imp note non empty string is always truthy value 

const arr = []

if(arr.length === 0){
     console.log("array is empty")
}

const user ={}

if(Object.keys(user).length === 0){
     console.log("object is empty")
}


// terniary operator

// condition ? true: false

const itemPrice = 100 

itemPrice <= 200 ? console.log("price is less than or equal to 200"):console.log("price is greater than 200");

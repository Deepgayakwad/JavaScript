// // ******* creation of promise ******************//
// const promise1 = new Promise(function(resolve,reject){
      
//        // do an async task 
//        // DB, calls cryptography, network 

//        setTimeout(function(){
          
//            console.log("async task is completed ");
//            resolve();
//        },1000)
// })

// // ***********consume of promise **************//
// promise1.then(function(){
//       console.log("promise is consumed")
// })


// // another ways to create promise and consume promise 

// new Promise(function(resolve,reject){
      
//         setTimeout(function(){
//             console.log()
//               console.log("async task 2 is completed");
//               resolve();
//         },1000)
// }).then(function(){
//       console.log("promise2 is consumed");
// })



//  another ways by receive data 

// const promise3 = new Promise(function(resolve,reject){
      
//        setTimeout(function(){
           
//              resolve({username:"dipak",password:"123"})
//        },1000)
// })

// promise3.then(function(user){
//       console.log(user)
//       console.log(user.username)
// })

//******** promise 4  */

// const promise4 = new Promise(function(resolve,reject){

//        setTimeout(function(){
           
//             let error = true

//             if(!error){
            
//                 resolve({username:"dipak",password:"111"})
//             }
//             else{
//                 reject("Error:something went wrong ");
//             }
//        },1000)
// })

// promise4.then(function(user){
//        console.log(user)
//        return user.username        // return here goes into next chaining of then as parameter
// }).then(function(username){
//     console.log(username)
// }).catch(function(error){
//       // console.log("hey what are you doing ")
//       console.log(error)
// }).finally(() => console.log("promise is either resolve or rejected "))



// ******** handling promises by async and await 

const promise5 = new Promise(function(resolve,reject){

    setTimeout(function(){
        
         let error = true

         if(!error){
         
             resolve({username:"javascript",password:"111"})
         }
         else{
             reject("Error:JS went wrong ");
         }
    },1000)
})


async function consumePromise5(){
      
         try{
              
            const response = await promise5
            console.log(response)
         }
         catch(error){
              
              console.log(error);
         }
}

consumePromise5()      // calling a function 

//   ******** receive info by promises from api 

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
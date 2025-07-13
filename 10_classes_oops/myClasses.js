// class User {
      
//        constructor(username,email,password){
//             this.username = username
//             this.email = email
//             this.password = password
//        }


//        encrypted(){
          
//             return `${this.username}`
//        }

//        changeToUppercase(){
//            return ` ${this.username.toUpperCase()}`
//        }
// }

// const chai = new User("chai", "chai@1234","12345")
// console.log(chai);
// console.log(chai.encrypted());
// console.log(chai.changeToUppercase());



// behind the scene by using the function 

function myUser(username,email,password) {
       
      this.username = username
      this.email = email
      this.password = password
}

myUser.prototype.encrypted = function(){
        return `${this.username}`
}

myUser.prototype.changeToUppercase = function(){
      
      return ` ${this.username.toUpperCase()}`
}

const tea = new myUser("tea", "tea@1234","1234567")
console.log(tea)
console.log(tea.encrypted());
console.log((tea.changeToUppercase()));




function setUsername(username){
      
       this.username = username
}

function createUsername(username,email,password){ 
      
       setUsername.call(this,username)

       this.email = email
       this.password = password
}

const chai = new createUsername("chai", "chai@gmail.com","1234")
console.log(chai)
console.log(chai.username)
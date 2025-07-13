class User {
       
         constructor(username,email,password){
              
             this.username = username 
             this.email = email
             this.password = password
         }

         logMe(){
             return `${this.username}`
         }
}

class Teacher extends User {
      
       constructor(username,email,password){
           super(username)
           this.email = email
           this.password = password
       }

       print(){
         console.log(`hey what a ${this.username}`);
       }
}

const chai = new User("chai","1234@gmail.com","12345")
console.log(chai.logMe())


const tea = new Teacher("tea","tea@gmail.com","212121")
console.log(tea.logMe())
tea.print()

console.log(chai instanceof User)
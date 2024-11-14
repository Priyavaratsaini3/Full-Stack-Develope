class User{
    constructor(username){    
        this.username = username;
    }   

    logme(){
        console.log(`Username is ${this.username}`);
        }
    }

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
     }

     addCourse(){
        console.log(`Course added by ${this.username}`)
}
}

const chai = new Teacher("prince", "prince@.com", "abc");
chai.addCourse();

chai.logme()

const masalaChai = new User("masalaChai")
masalaChai.logme()

console.log(chai instanceof User);

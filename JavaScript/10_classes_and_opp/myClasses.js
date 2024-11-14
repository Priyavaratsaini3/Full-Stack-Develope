// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User ("chai", "chai@.com", "abc");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

function User (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

const tea = new User ("chai", "chai@.com", "abc");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
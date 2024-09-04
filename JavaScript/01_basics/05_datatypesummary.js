// Primitive 
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 200
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId);

const BigInt = 34549868946493497639n

// Reference (Non primitive)
// Array , Object , Function

const heros = ["saktimaan", "naagraj", "doga"];
let myObj = {
    name: "priyavart saini",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
    
}
console.log(typeof myFunction, typeof myObj, typeof heros, typeof BigInt, typeof id, typeof anotherId, typeof userEmail, typeof outsideTemp, typeof isLoggedIn, typeof scoreValue, typeof score)
console.log(typeof Symbol);

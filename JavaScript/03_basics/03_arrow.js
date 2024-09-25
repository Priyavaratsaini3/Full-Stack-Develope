const user = {
    username: "prince",
    price: 888,
    
    welcomeMessage: function(){
    console.log(`${this.username} , wlecome to website`)
    console.log(this);
    }
}
//console.log(newFunction());

//console.log(this);
// current context ko refer krta h (this) 
// CONTEXT => kis k bare m baat hori h 
//(THIS) => current value or variable ki baat keta h 

// user.welcomeMessage()
// user.username = "sam" 
// user.welcomeMessage()

console.log(this);  
// browser ke ander globle object he window object
// node js ke ander globle object he empty object

// function chai(){
//     let username = "prince"
//     console.log(this.username);
// }

// chai() 

// const chai = function(){
//     let username = "prince"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "prince"
    console.log(this);
}

chai()
// explit return => jab hum return key word use krte h 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implecit return
// prantisies use nhi krte

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

// object return 
const addTwo = (num1, num2) => ({username: "prince", price: 199})

console.log(addTwo(3, 5))

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// myArray.forEach()
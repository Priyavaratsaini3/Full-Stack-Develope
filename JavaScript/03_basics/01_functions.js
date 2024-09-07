//function sayMyName(){
//    console.log("P");
//    console.log("R");
//    console.log("I");
//    console.log("N");
//    console.log("C");
//    console.log("E");
//  }
//sayMyName()

//function addTwoNumbers(number1, number2){
//    console.log(number1 + number2)
//
//}
//addTwoNumbers(3, 5);
//console.log(addTwoNumbers(3, 6)); // NaN , undefined

function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    //return result

    return number1 + number2
}

const result = addTwoNumbers(4, 4)

//console.log("Result", result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("prince"));

function calculateCartPrice(val1, val2, ...num1){
   // return `${val1}, ${val2}, ${num1}`
   return num1
    
}

//console.log(calculateCartPrice(300, 400,500, 600));

const user = {
    username: "prince",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 500, 600,]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 300, 500 ,699]));



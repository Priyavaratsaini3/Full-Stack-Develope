//function sayMyName(){
    // console.log("P");
    // console.log("R");
    // console.log("I");
    // console.log("N");
    // console.log("C");
    // console.log("E");
// }

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

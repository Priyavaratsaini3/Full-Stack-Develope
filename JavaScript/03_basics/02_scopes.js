//var c = 300;
let a = 300;
if (true) {
    let a = 20;
    const b = 20;
    console.log("INEER:", a);
}

console.log("OUTER:", a);
// console.log("OUTER:", b);
//console.log("OUTER:", c);
// scopess
// the region of the code where a variable is defined
// let and const are block scoped
// var is function scoped

function one() {
    const username = "prince";


    function two() {
        const website = "prince.com";
        console.log(username);
    }
   // console.log(website);
    two();
}

//one();

if (true) {
    const username = "prince";
    if (username === "prince") {
        const website = "prince.com";
        console.log(username + " " + website);
    }
    //console.log(website);
}

//console.log(username);


console.log(addone(5));

function addone(num) {
    return num + 1;
}


const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(5));
// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["iron man", "thor"];

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[1]);

// Array methods

//myArr.push(6);
//myArr.push(7);
//myArr.pop();

//myArr.unshift(9);
//myArr.shift();

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

const newArr = myArr.join();

console.log(myArr);
console.log(typeof (newArr) +" " + newArr);

// slice , splice

console.log("A", myArr);
//Returns a copy of a section of an array. 
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);


const fruits  = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length);

fruits[5] = "mango";
console.log(fruits[5]);
console.log(Object(fruits));
console.log(Object.keys(fruits));
console.log(fruits.length);

fruits.length = 10;
console.log(fruits);
console.log(Object.keys(fruits));
console.log(fruits.length);
console.log(fruits[8]);

fruits.length = 2;
console.log(fruits);    
console.log(Object.keys(fruits));
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

const color = ["red", "green", "blue"];
color[5] = "yellow";
//color.forEach( (item , index) => {
   // console.log(`${item}: ${index}`);
//});

color.reverse();
color.forEach( (item , index) => {
    console.log(`${item}: ${index}`);
});


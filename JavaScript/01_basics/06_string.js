// The string object is used to represent and manipulate a sequence of characters.

// const string1 = "A string primitive";
// const string2 = 'Also a string primitive';
//// const string3 = `Yet another string primitive`;
//
//// const string4 = new String("A string object");
//// console.log(string1, string2, string3, string4)
//// console.log(typeof (string4));
//
//// Character access
//// There are two ways to access character in a string.
//console.log("priyavart saini".charAt(8));
//console.log("priyam"[2]);
//
//const a = "priyavart";
//const b = "priyam";
//// Comparing String
//if(a < b) {
//    console.log(`${a} is the less than ${b}`);
//} else if (a > b ) {
//    console.log(`${a} is greater than ${b}`);
//} else {
//    console.log(`${a} and ${b} are equal`);
//}
//
// //  String primitives and String objects
//
// const str1 = "hello";
// const str2 = String(1);
// const str3 = String(true);
// const str4 = new String(str1);
//
// console.log(`
//    ${typeof str1}
//    ${typeof str2}
//    ${typeof str3}
//    ${typeof str4}
//    `);
//
//const s1 = "2 + 2";
//const s2 = new String("2 + 2");
//console.log(eval(s1));
//console.log(eval(s2));
//
//console.log(eval(s2.valueOf()));

// String coercion
//let num = 123;
//let str = num.toString();
//console.log(`${str}`+ typeof(str));

const name = "priyavart";
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('priyavart');
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   priyam   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://priyam.com/prince%30saini"
console.log(url.replace('%30','&' ));
console.log(url.includes('saini'));

console.log(gameName.split('-'));





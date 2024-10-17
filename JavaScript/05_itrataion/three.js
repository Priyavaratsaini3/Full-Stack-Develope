// for of 

//["", ""]
//[{}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}

const greeting = "hello world!";

for (const letter of greeting) {
    console.log(`each char is ${letter}`);
    
}

//Maps

const myMap = new Map();
myMap.set('IN', "India")
myMap.set('US', "United States")
myMap.set('UK', "United Kingdom")

console.log(myMap);

for (const [key, value] of myMap) {
    console.log(key, ' -> ', value);
}

const myObject = {
    'game1': 'Fortnite',
    'game2': 'PUBG',
}

// for (const [key, value] of myObject) {
//     console.log(key, ' -> ', value);
// }
 // it is not iterable

//  const years = ["2", "02"]
//  console.log(years["2"] == years["02"]);
//  console.log(years.toLocaleString);
//  console.log(typeof years);

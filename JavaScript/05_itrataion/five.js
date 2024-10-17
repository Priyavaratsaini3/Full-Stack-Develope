const coding = ["js", "rb", "py", "java", "cpp"]
  
// coding.forEach(  function (item) {
//     console.log(item);
// })

// coding.forEach( (value) => {
//     console.log(value);
    
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item , index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [ 
    {
        languageName: "javascript",
        languagFileName: "js"
    },
    {
        languageName: "java",
        languagFileName: "java"
    },
    {
        languageName: "python",
        languagFileName: "py"
    },
]

myCoding.forEach( (item) => {
//  console.log(item.languageName);
    
})

const arr = [1, "hello", true , {key: "value" }, [1, 2]];
arr.forEach(Element => {
    console.log(typeof Element);
});
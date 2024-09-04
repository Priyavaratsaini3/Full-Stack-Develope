// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const Jsuser = {
    name: "priyavart", 
    "full name": "priyavart saini",
    [mySym]: "mykey1",
    age: 21,
    location: "nakur",
    email: "priyavart@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

Jsuser.email = "priyavart@chatgpt.com"
//Object.freeze(Jsuser);
Jsuser.email = "priyavart@microsoft.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`hello JS user, ${this["full name"]}`);
}


console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

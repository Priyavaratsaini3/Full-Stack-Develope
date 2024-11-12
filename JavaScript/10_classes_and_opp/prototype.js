let myName = "hitesh    "

console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh = function(){
    console.log(`hitesh is prsent in all objects`);
    
}
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
    
}
heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.con"
}

const Teacher = {
    makeVideo: true 
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssingment: 'JS assingmant',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// morden syntax
Object.setPrototypeOf(TASupport, Teacher)

let anotherUserName = "ChaiAurCode        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
const user = {
    username: "hitesh",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        
    }
}

console.log(user.username);
console.log(user.getUserDetails)
console.log(this);

 function User (username,logINCount, isLoggedIN){
    this.username = username,
    this.logINCount = logINCount,
    this.isLoggedIN = isLoggedIN

    return this
 }
 const userOne = new User("hitesh", 12 , true)
 const userTwo = new User("chaiaurcode", 4, false)
 console.log(userOne);
 console.log(userTwo);
 
 
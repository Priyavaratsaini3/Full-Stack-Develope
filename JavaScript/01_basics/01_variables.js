const accountId = 2003
let accountEmail = "priyavartsaini@2gmail.com"
var accountPassword = "newme "
accountCity = "Nakur"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional
*/
// accountId = 2344
accountEmail = "vishal34@gamil.com"
accountPassword = "me"
accountCity = "saharanpur"
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
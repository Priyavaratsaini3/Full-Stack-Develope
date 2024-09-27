// Immediately Invoked Function Expression
// In JavaScript, an IIFE is a self-invoking anonymous function that is executed immediately after it's defined. It's a function that runs automatically when the script is loaded, without the need to explicitly call it.


// jo function immediately execute ho jaye 
// global scope pullution se problem hoti hai
// global scope ke pollution or variable jo declear h unko hatane k liya hum iife ka use kr te h

// syntax of  iife

(function chai() {
    // Named iife
    console.log("db connected");
})();

( (name) => {
    // simple iife 
    console.log(`DB CONNECTED TWO ${name}`);
})('prince')


// The key characteristics of an IIFE are:
// 
// It's an anonymous function (no name is assigned to it).
// It's wrapped in parentheses, which makes it an expression.
// It's immediately invoked by adding another set of parentheses at the end, which contains the arguments to be passed to the function (if any).
// IIFEs are useful for several reasons:
// 
// They create a new scope, which helps to avoid polluting the global namespace.
// They allow you to execute code immediately, without the need for an explicit function call.
// They can be used to create modules or namespaces, encapsulating related functionality
// var keyword
// scope is global and function level

var globalGreeting = "Hi";

function add(a, b) {
    var greeting = "Hello";
    globalGreeting = "thanks";
    console.log("From Function : ", globalGreeting);
    return a + b;
}

// console.log(greeting); // error
var result = add(1, 2);
console.log("From Global : ", globalGreeting); // not "Hi", "thanks"

/**
From Function :  thanks
From Global :  thanks
 */

var scopeDef = "Global";
console.log("Scope from Global : ", scopeDef)
function changeScope()
{
    var scopeDef = "Local";
    console.log("Scope from Function : ", scopeDef);
}
changeScope();
console.log("Scope from Global : ", scopeDef);
/**
Scope from Global :  Global
Scope from Function :  Local
Scope from Global :  Global
 */

console.log("****************************")

var globalVrb = "Hi";

if(true)
{
    var globalVrb = "Hello";
}

console.log("Block and Global are same : ", globalVrb); // Hello

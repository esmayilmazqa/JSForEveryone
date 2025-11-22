// let - global level and block level
// var - global level and function level

console.log("Let keyword using on global and block level");
console.log("------------------")
let value = "global variable";
console.log(value);

if (true) {
    // global value varible cannot accesible is here
    console.log("which value is here? : "+ value); // Cannot access 'value' before initialization
    let value = "local variable";
    console.log(value);

}

console.log(value);
console.log("***************");

console.log("Var keyword using")
console.log("------------------")

var variable = "var global variable";
console.log(variable);

if (true) {
    console.log(variable + " --- from if block");
    var variable = "var local variable";
    console.log(variable + "--- from if block")
}

console.log(variable + " -- from global level");

/**
 * Let keyword using
------------------
global variable
local variable
global variable
***************
Var keyword using
------------------
var global variable
var global variable --- from if block
var local variable--- from if block
var local variable -- from global level !!
 */



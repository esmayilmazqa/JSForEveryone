console.log("Global Level and Function Level on let and var")
console.log("----------------------------------------------")
var text = "text is from global";
console.log(text);

function sum(a, b) {
    console.log(text, " from function level");
    text = "text is from function level";
    console.log(text, " from function level (set)")
    return a + b;
}

sum(1, 2);
console.log(text, " from global level");
/**
 * Global Level and Function Level on let and var
----------------------------------------------
text is from global
text is from global  from function level
text is from function level  from function level (set)
text is from function level  from global level
 */
console.log("*******************\n Function Level for Let Keyword");
console.log("-----------------------")
let letText = "let from global level";
console.log(letText, " ----- global level")

function divide(a, b) {
    console.log(letText, " ----- function level");
    letText = "let is setted on function level";
    return a / b;
}

divide(3,2);
console.log(letText, " ----- global level")
/**
 *  Function Level for Let Keyword
-----------------------
let from global level  ----- global level
let from global level  ----- function level
let is setted on function level  ----- global level
 */
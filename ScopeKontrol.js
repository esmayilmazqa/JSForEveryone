// Scope Kontrol on var and let
let globalText = "let in global block";
console.log(globalText, "--- from global level");

if (true) {
    // see the globalText in block level like var keyword
    console.log(globalText + "----- globalText in block level");
    let text = "let in if block";
    console.log(text, "--- from block level");
}

// console.log(text); // ReferenceError: text is not defined

function sum(a, b) {
    let num1 = 0, num2 = 0;
    num1 = 3;
    num2 = 5;
    console.log("let is from function");
    console.log("num1 : ", num1, "num2 : ", num2);
    return a + b;
}

sum(2, 3);
console.log("let is from global");
// console.log("num1 : ", num1, "num2 : ", num2); // ReferenceError: num1 is not defined

console.log("**************************************");
var globalVar = "var in global block";
console.log(globalVar, "--- from global level");

if (true) {
    // see the globalText in block level like var keyword
    console.log(globalVar + "----- globalVar in block level");
    var varText = "var in if block";
    console.log(varText, "--- from block level");
}

console.log(varText); // var in if block

function sum(a, b) {
    var varN1 = 0, varN2 = 0;
    varN1 = 3;
    varN2 = 5;
    console.log("var is from function");
    console.log("num1 : ", varN1, "num2 : ", varN2);
    return a + b;
}

sum(2, 3);
console.log("var is from global");
console.log("num1 : ", varN1, "num2 : ", varN2);  // ReferenceError: num1 is not defined


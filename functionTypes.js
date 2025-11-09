// normal function
function add(a, b) {
    return a + b;
}

let result = add(3, 9);
console.log("Result : ", result);

// anonymous function
var sumOfInteger = function (a, b) {
    return a + b;
}

let sumFunc = (a, b) => {
    return a + b;
}

console.log("Anonymous Fn result1 : ", sumFunc(3, 1));
console.log("Anonymous Fn result2 : ", sumOfInteger(8, 3));

//arrow function
let sumOfNumbers = (a, b) => a + b;
console.log("Arrow function : ", sumOfNumbers(9, 9));
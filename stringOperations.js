let day = "tuesday ";

// ***** length of string ******
console.log("String : ", day); // String :  tuesday
console.log("Length of day : " + day.length); // Length of day : 8

// ***** substring of string *****
console.log("Substring : ", day.slice(0, 4)); // Substring :  tues

// ****** get the spesific character ******
let character = day[2]; // start at 0
console.log("Third character of " + day + " : ", character); // Third character of tuesday  :  e

// ****** split the string base on expression ******
console.log("String : ", day); // String :  tuesday
let splitArray = day.split('s'); // occurs an array
console.log("Second Part : " + splitArray[1]); // Second Part : day [tue] s [day]

// ******* trim() to remove whitespaces start and end of the string *******
console.log("String : " + day, "Length of the String : " + day.length); // String : tuesday  Length of the String : 8
console.log("After trim, the length : " + day.trim().length) // After trim, the length : 7

// **** conversion of string to number - parseInt and toString() ****
let date = '28';
let nextDate = "31";
let diff = parseInt(date) - parseInt(nextDate);
console.log("Difference (2days) : " + diff); // Difference (2days) : -3
console.log("Convert to String : ", diff.toString()); // Convert to String :  -3

// ****** concantenate of strings *********** 
let sayHello = "Hi";
let greeting = sayHello + " welcome";
console.log(greeting); // Hi welcome

// ****** indexOf expression ***
let text = "John Doe";
let val = text.indexOf("Doe");
console.log("Which index : " + val); // Which index : 5
let finalText = "Hi! " + text + " " + "Hi....";
console.log(finalText.indexOf("Hi", 3)); // 13

function findCountOfSearchedText(text, searchText) {
    let value = text.indexOf(searchText);
    let count = 0;
    while (value != -1) // is exist
    {
        count++;
        value = text.indexOf(searchText, value + 1);
    }
    return count;
}

console.log(findCountOfSearchedText("Hi, John, Hiii", "Hi")); // 2
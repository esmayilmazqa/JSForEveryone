
let arrays = Array(7);
var numbers = new Array(1, 2, 3, 4, 5, 6, 7);
let arrayNumbers = [11, 22, 33, 44, 55]
console.log("Main array : ", arrayNumbers)
subArray = arrayNumbers.slice(1, 3);
console.log("Subarray : " + subArray)
console.log(subArray)

arrayNumbers[4] = 100;
console.log(arrayNumbers)
console.log("Array Size : ", arrayNumbers.length)
arrayNumbers.push(25)
console.log(arrayNumbers)
console.log("delete last element with pop method")
arrayNumbers.pop()
console.log(arrayNumbers)
arrayNumbers.unshift(5)
console.log("Unshift effect : ", arrayNumbers)
console.log("index of element (100) : " + arrayNumbers.indexOf(100))
console.log("Is element in array : (11) ", arrayNumbers.includes(11))

let myNumbers = [11, 22, 33, 44, 55]
console.log("Main array : ", myNumbers)
let sum = 0;
for (let index = 0; index < myNumbers.length; index++) {
    const element = myNumbers[index];
    //console.log(element); // print array elements
    sum += element;

}
console.log("Sum : " + sum);

// reduce method takes two argument
let totalSum = myNumbers.reduce((total, eachValue) => total + eachValue, 0);
console.log("Sum of Array Elements : " + totalSum);

// ex : find even numbers in any array.
let myArray = [11, 12, 13, 14, 15, 16];
let evenArray = [];
console.log("MyArray : ", myArray)
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 == 0) {
        evenArray.push(myArray[i]);
    }
}
console.log("EvenArray : ", evenArray)

// filter method
let evenArr = myArray.filter(number => number % 2 == 0);
console.log("Filter Method :", evenArr);

// map method
// [11, 12, 13, 14, 15, 16] => [12,14,16] => [24,28,32]
let mapArr = evenArr.map(eachValue => eachValue * 2);
console.log("Map Method : ", mapArr);


let array = [1, 2, 3, 4, 5, 6, 7];
// find even numbers and multiply 2 (you can use methods together)
console.log("Array : ", array);
let filteredMappedArr = array.filter(item => item % 2 == 0).map(item => item * 2);
console.log("2 Methods : ", filteredMappedArr);

// ex : find even numbers and multiply 3 and sum them
let array2 = [1, 2, 3, 4, 5, 6, 7];
console.log("Orijinal Array : ", array2);
let lastArr = array2.filter(item => item % 2 == 0)  // [2,4,6]
    .map(item => item * 3)                          // [6,12,18]
    .reduce((sum, value) => sum + value, 0);        // 6+12+18 = 36
console.log("Result : ", lastArr);

// sorting
// string
let fruits = ["mango", "banana", "strawberry", "apple"];
console.log("Fruits : ", fruits);
fruits.sort();
console.log("Sorted : ", fruits);

// numbers 
// ex 1 :
let nSortednumbers = [9,1,4,2,8]
console.log("Original array : ", nSortednumbers);
console.log("SortedArray : ", nSortednumbers.sort());

// custom logic with arrow function
var nsNumbers = [9,1,4,2,8,3]
console.log("Array : ", nsNumbers);
nsNumbers.sort((a,b) => a-b );
console.log("Sorted on custom logic with arrow fn : ", nsNumbers);

// custom logic with anonymous function
var nsNumbers = [9,1,4,2,8,3]
nsNumbers.sort(function(a,b){
    return a-b;
})
console.log("Sorted on custom logic with annonymous fn : ", nsNumbers);

// reverse of array
// string
let fruits2 = ["mango", "banana", "strawberry", "apple"];;
console.log("Fruits array : ", fruits2);
fruits2.reverse(); 
console.log("Reverse fruits : ", fruits2);
console.log("Sorted fruits : ", fruits2.sort());
// numbers
var nsNumbers = [9,1,4,2,8,3];
console.log("Array : ", nsNumbers);
console.log("Reverse :" ,nsNumbers.reverse());
// sort and reverse
console.log("Custom Reverse : ", nsNumbers.sort((a,b)=> a-b)); 




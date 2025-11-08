
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


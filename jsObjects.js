let person = {
    firstName: "John",
    lastName: "Doe"
}

console.log("Dot notation : " + person.firstName); // Dot notation : John
console.log("Bracket notation : " + person["firstName"]); // Bracket notation : John 


// *** assigning new value to property ****
person.firstName = "Jane";
console.log(person["firstName"]); // Jane


// ***** add a new property to object ****
person.gender = "Female";
console.log(person); // { firstName: 'Jane', lastName: 'Doe', gender: 'Female' }


// ****** delete a property from object ****
delete person.gender;
console.log(person); // { firstName: 'Jane', lastName: 'Doe' }

// *** check any propert in object *****
let isExist = "gender" in person;
console.log("Is Exist : " + isExist); // Is Exist : false

// **** reach each key in foreach loop (key keyword) *****

for(let key in person)
{
    console.log(person[key]); // Jane \nDoe
}

/** functions in property of object */
let person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    fullName: function () {
        console.log(this.firstName + this.lastName)
    }
}
/** or by using arrow function
let person = {
    firstName: "Jane",
    lastName: "Lock",
    age: 23,
    fullName: ()=> {
        console.log(this.firstName + this.lastName)
    }
}
*/

person.fullName();
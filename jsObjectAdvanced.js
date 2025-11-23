module.exports = class Person {
    age = 12; // class variable
    // location = "USA";
    get location() {
        return "USA";
    }

    constructor(firstName, lastName) // instance variables
    {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    fullName() {
        console.log(this.firstName + this.lastName);
    }
}
/* executed for class :
let person = new Person("John", "Doe");
console.log("age : " + person.age);
console.log("Location : ", person.location);
person.fullName();
*/

/**
 let person = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    fullName: function () {
        console.log(this.firstName + this.lastName)
    }
}

person.fullName();
*/
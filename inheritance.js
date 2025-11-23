const Person = require("./PersonClass");
class African extends Person{

    constructor(firstName, lastName)
    {
        // mandatory
        super(firstName, lastName);
    }

    get Location(){
        return "Africa";
    }

}

let african = new African("Ahmed", "Salam");
african.fullName();
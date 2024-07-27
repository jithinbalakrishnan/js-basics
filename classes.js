class Human {

    constructor () {
        this.gender = "male";
    };
    getGender () {
        console.log(this.gender);
    };
};


class Person extends Human {
    constructor() {
        super();
        this.name = "Jithin"
        this.gender = "female";
    };

    getName () {
        console.log(this.name);
    };
};

const person = new Person();

person.getName();
person.getGender();


// PRACTICE



// Class Declaration
class User {

    // private field
    #id = 1;

    static #c = 3;  // .#c is private and static

    // The constructor method is a special method for creating and initializing an object created with a class.
    // A constructor can use the super keyword to call the constructor of the super class.

    constructor() {
        this.name = "Jithin"
    }

    incrementPrivateField() {
        this.#id++;
    }
    // incrementStaticPrivateField() {
    //     this.#c++; // showing the error
    // }

    getName() {
        return this.name + " id =" +this.#id
    }

    printValue() {
        console.log(this.privateStaticField)
    }

    set updateName (name) {
        this.name = name
    }

    get getFullName() {
        return this.name
    }


}
// The extends keyword is used in class declarations or class expressions to create a class as a child of another constructor (either a class or a function).

class Admin extends User {
    constructor(role) {
        this.role = role
    }
}


// Expression; the class is anonymous but assigned to a variable
let data = new User();

// console.log(data)
// console.log("1", data.getName())
// console.log("3", data.getFullName)
// data.updateName = "Jib"
// console.log("3", data.getName())
// console.log("3", data.getFullName)

// console.log(data.privateStaticField)
// console.log(data.printValue())

// console.log("private field", data.id)
// console.log("private field", data.incrementPrivateField()) // runs without error

// data.#id = 2 // Showing error
// data.#c = 3 // 

// https://www.sitepoint.com/javascript-private-class-fields/
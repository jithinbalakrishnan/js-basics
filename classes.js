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
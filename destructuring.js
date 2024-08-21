
// unpack values from arrays, or properties from objects, into distinct variables
let userDetails = ["John", 24, "Doe", "MG Road, Gurgaon"];

let [name, age] = userDetails;

console.log(name)
console.log(age)

let [name1, , , location] = userDetails;

console.log(location);

// Basic Object Destructuring

let person = {firstName: "Sarah", country: "Nigeria", job: "Developer"};

let {firstName, friends, job} = person;


// Using Default Values

let person2 = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name3 = "myName", friend = "Annie"} = person;

console.log(name3);//"Sarah"
console.log(friend);//"Annie



// ref- https://freecodecamp.org/news/array-and-object-destructuring-in-javascript/

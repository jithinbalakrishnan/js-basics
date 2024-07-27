//inheritance means one object trying tio access methods and properties of another object

// whenever we create an object in javascript, javascript engine automatically puts its hidden properties into an object and
// attached to your object


let arr = [10]

let person = {
    name: "jithin"
}

function printName(name) {
    console.log(name)
}

//Case : 1 - Array
console.log(arr.__proto__)
// 17 and 19 are equal
console.log(Array.prototype)

console.log(arr.__proto__.__proto__) // is an object

console.log(arr.__proto__.__proto__.__proto__) // is null   //prototype chaining



//Case : 2 - Object

console.log(person.__proto__)
//  30 and 32 are equal
console.log(Object.prototype) // is an object

console.log(person.__proto__.__proto__) // is null    //prototype chaining


// Case 3 : Function

console.log(printName.__proto__)
// 39 and 41 is equal
console.log(Function.prototype) 

console.log(printName.__proto__.__proto__) // is object

console.log(printName.__proto__.__proto__.__proto__) // is null    //prototype chaining


//  What is Prototypal Inheritance?

let family = {
    familyName: "Balu's Home",
    address: "Kerala",
    members: 4,
    getMember: function(){
        console.log("There are "+ this.members+ " members in " + this.familyName)
    }
}

let member = {
    name: "Jithin"
}
let newMember = {
    name: "Akhila",
    familyName: "Akhila's Home" // comment and try..it will inherit familyName from family object

}

member.__proto__ = family
// member object inheriting the properties of family object

console.log(member.name)
console.log(member.familyName)
console.log(member.getMember())

newMember.__proto__ = family;

console.log(newMember.getMember())


// let obj = {
//     firstName: "Jithin",

    // getFullName: function() {
    //     return this.firstName
    // }
// }

// console.log(obj.getFullName())

let data = {
    firstName: "Jithin"
}

const getFullName = function(secondName) {
    return this.firstName + secondName
}

// console.log(getFullName.apply(data, ["Bal"]))

const getName = getFullName.bind(data, ["Bal"])

console.log(getName())

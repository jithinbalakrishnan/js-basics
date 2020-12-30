let name = {
    firstName : "Jithin",
    secondName: "Balu",
    getFullName: function () {
        return this.firstName + " " + this.secondName;
    }
};

// console.log(name.getFullName())


let getFullName = function (hometown) {
    return this.firstName + " " + this.secondName + " from " + hometown;
}

let name2 = {
    firstName: "Jibin",
    secondName: "Balu"
};

// console.log(name.getFullName.call(name2))

console.log(getFullName.call(name, "Kannur"))

console.log(getFullName.apply(name2, ["Kannur"]))
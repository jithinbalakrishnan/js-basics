// Generator Function 
function* add(i) {
    yield i;
    yield i + 10;
    return 25;
}

const addGen = add(10)

console.log(addGen.next()) 
console.log(addGen.next())
console.log(addGen.next())
console.log(addGen.next())


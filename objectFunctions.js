const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};


console.log(Object.keys(obj)) //  ['name', 'age', 'city']

console.log(Object.values(obj)) // ['John', 30, 'New York']

console.log(Object.entries(obj)) // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
// it involves breaking down a function that takes multiple arguments into a series of functions that take one argument each.
// currying is based on bind()

const multiply = function(x,y) {
    return x * y;
};

const multiplyBy2 = multiply.bind(this, 2);

console.log(multiplyBy2(3))


// using closure

const mul = function (x) {
    return function(y) {
        return x * y;
    }
};

const mulBy4 = mul(4);

console.log(mulBy4(4))
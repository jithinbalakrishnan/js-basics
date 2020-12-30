// var passed = 3

// var addTo = function () {
//    var inner = 2;
//    return passed + inner;
// };

// console.dir(addTo);



var addTo = function (num) {

    var add = function (inner) {
        return num + inner
    }
    return add;
}

// console.log(addTo(5))

var addTwo = addTo(5);

console.log(addTwo(1));
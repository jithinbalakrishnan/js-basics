var arr1 = [1, 2, 3, [4,5]];
console.log("arr1", arr1.flat());
//arr1 [1, 2, 3, 4, 5]

var arr2 = [1, 2, 3, [4, 5, [6, 7, 8]]];
console.log("arr2", arr2.flat(1));
//arr2 [1, 2, 3, 4, 5, [6, 7, 8]]

var arr3 = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10]]]]
console.log("arr3", arr3.flat(Infinity));
//arr3  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var arr4 = [1, 2, , 4, 5];
console.log("arr4", arr4.flat());
// arr4 [1, 2, 4, 5]
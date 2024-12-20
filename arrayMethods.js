
// Array methods examples
// push() – Adds an element to the end of an array.
// pop() – Removes the last element from an array.
// shift() – Removes the first element from an array.
// unshift() – Adds an element to the beginning of an array.
// sort() – Sorts the elements of an array in ascending order.
// reverse() – Reverses the order of the elements in an array.

const ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age > 18;
  }


  ages.some(checkAdult); // true  -  whether at least one of the elements of the array satisfies the given condition or not.

  ages.every(checkAdult); // false  - whether all the elements of the array satisfy the given condition or not

  

//   JavaScript Unshift() method is very much similar to the push() method but the difference is that the unshift() 
//   method adds the elements at the very beginning of the array whereas the push() method adds at the end of the array.




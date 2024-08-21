const arr = [1, 10, 4,7]

// sum or max

function sum (a) {
    let sum = 0;
    for (i = 0 ; i < a.length ; i++) {
        sum = sum + arr[i];
    }
    console.log('sum', sum)
    return sum;
}
sum(arr)


//accumalaotr  and current
const output = arr.reduce((acc, current) => {
    acc = acc+ current;
    return acc;
}, 0)
console.log('op', output)

function findMax (arr) {
    let max = 0;
    for (i = 0 ; i < arr.length ; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log('findMax', findMax(arr))


const max = arr.reduce((acc,current) => {
    if(acc < current) {
        acc = current;
    }
    return acc
}, 0)

console.log('max', max)

// Remove duplicate items
const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

let result = items.reduce((ac, cu) => {
    if(!ac.includes(cu)) {
        ac.push(cu)
    }
    return ac
},[])
console.log('result', result)


// arr.reduce((a,b) => a = a+ b) find total

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

// sort

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          var temp = arr[j]
          arr[j] = arr[i]
          arr[i] = temp
        }
      }
    }
    return arr;
  }
  

sort[10,1,4]
// function sort(arr) {

//     for (let i = 0) {

//       for (let j = 1) {

//         if (10 > 1) {

//           var temp = 1

//           arr[j] = 10

//           arr[i] = 1
//         }
//       }
//     }
//     return arr;
//   }
  
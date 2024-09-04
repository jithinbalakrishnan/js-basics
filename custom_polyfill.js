// polyfill basically is writing our own implementation of in-build function
//ref: https://www.youtube.com/watch?v=Th3rZjfKKhI


// --------------- map ------------------------//
Array.prototype.customMap = function (callBack) {
    let item = [];
    // here this is array
    for (let i = 0; i < this.length; i++) {
      item.push(callBack(this[i], i, this));
    }
    return item;
  };
  
  let result = [1, 2, 3].customMap((i) => {
    console.log(i);
    return i;
  });
  
  console.log("result", result);
  
  // --------------- filter ------------------------//
  Array.prototype.customFilter = function (callBack) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      if (callBack(this[i], i, this)) {
        temp.push(this[i]);
      }
    }
    return temp;
  };
  
  let data = [25, 45, 1];
  
  let filterResult = data.customFilter((i) => i > 25);
  
  console.log("filterResult", filterResult);

  // --------------- reduce ------------------------//
  Array.prototype.customReduce = function(callBack, inititalValue) {
    var accumulator = inititalValue;
    for(let i=0; i<this.length; i++) {
        accumulator = accumulator ? callBack(accumulator, this[i],i) : this[i]
    }
    return accumulator
}
console.log([1,2,3].reduce((a,c)=> {
    return a = a+c
}))
console.log([1,2,3].customReduce((a,c)=> {
    return a = a+c
}))
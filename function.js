// function printNumber () {
//     for(var i= 0 ; i <= 5; i++){
//         function z(x) {
//             setTimeout(function() {
//                 console.log(x)
//             },x * 1000)
//         }
//         z(i);
//     }
// }

// printNumber();


// constructor function

function Counter () {
    var num = 0;
    this.increment = function() {
        num++;
        console.log(num)
    }
    this.decrement = function() {
        num--;
        console.log(num)
    }

}

var counter = new Counter();
counter.increment()
counter.increment()
counter.increment()
counter.decrement()


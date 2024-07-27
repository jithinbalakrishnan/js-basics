// function binds together with its lexical scope it is called closure 

// function x () {
//     var a = 100; 
//     function y () {
//         console.log(a);
//     };
//     y();
// }
// x()

function x () {
    var a = 100; 
    function y () {
        console.log(a);
    };
    return y;
}
var z = x();
z();
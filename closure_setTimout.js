function x () {
    for(let i = 1; i < 6; i++) {
        setTimeout(()=> {
            console.log("using let", i);
        }, i*1000)
    }
}
// x();

function y () {
    for(var i = 1 ; i <6 ; i++) {
        function z (x) {
            setTimeout(() => {
                console.log("closure", x)
            }, x *1000)
        }
        z(i)
    }
}
y()
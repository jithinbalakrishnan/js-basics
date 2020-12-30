// Variable Hoisting

//example 1

console.log(x)

var x = 1;

// undefined

num = 5; // initializing

console.log("num", num)

var num; // declaring

// num 5

var flag = false;

(function () {
    
    console.log("flag", flag)
    // javascript hoists only declaration not initialization 
    //hence the above log prints false
    var flag = true;

    console.log("flag1", flag)

    /* 
    
    above block is like this
    
    var flag
    console.log("flag", flag)
    flag = true;
    console.log("flag1", flag)

    */

    if(flag) {
        //let and const are always block scoped.

        let name = "Jithin";
        const age = "25";
        console.log("name", name)
        console.log("age", age)
    }
    // console.log("name_1", name)
    // console.log("age_1", age)

})()
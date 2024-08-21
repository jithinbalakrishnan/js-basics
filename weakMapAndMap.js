// https://www.youtube.com/watch?v=sXV_31fwetY
// https://www.youtube.com/watch?v=G2T1hWES_qo

// Example 1

{
    let x = {
        "name": "Jithin"
     }
    //  The Map() constructor is used to create Map objects in JavaScript. 
    // The map is a data structure that stores elements as a key, value pair
     var map = new Map();
     map.set(x, 'example for Map')

     // ENDS //

    // change the let to var to see the difference
    let y = {
       "name": "Jithin"
    }
    var weakMap = new WeakMap();
    weakMap.set(y, 'example for WeakMap')
}
console.log('map', map) // there will be entires
console.log('weak map', weakMap) // no entires for the weakMap , due to scope of let





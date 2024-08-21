// https://www.youtube.com/watch?v=SjK9qU6oRVo
// https://www.youtube.com/watch?v=G2T1hWES_qo


// Example 1

let newSet = new Set()

newSet.add(2).add(3).add(4)

for(let val of newSet) {
    console.log("value from new Set()", val)
}

newSet.delete(4)

console.log('newSet', newSet)

newSet.clear()

console.log('newSet clear', newSet)

let ar = [1,3,3,5,7,8,1,4]
// set contains only unique values
console.log(new Set(ar))
console.log([...new Set(ar)])

// ------------------ WeakSet -------------       //

let ws = new WeakSet([{name: "Jithin"}]) // not iterable

// ws.add(5) // it will throw an error, primitive type are not allowed

ws.add({name: "Jibin"})

console.log(ws)

for(let val of ws) { //it will throw error
    console.log("value from new Set()", val)
}





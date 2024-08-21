// Recursion is a programming technique where a function calls itself repeatedly to solve a problem.

let a = [1,2, [3,4],[4,5],[6,7]]

let temp = []
function customFlat(data) {
    data.forEach((i) => {
        if(typeof i === 'object') {
            // temp.push(...i)
            customFlat(i)
        } else {
            temp.push(i)
        }
    })
}
customFlat(a)
console.log(temp)
console.log('flat', a.flat())
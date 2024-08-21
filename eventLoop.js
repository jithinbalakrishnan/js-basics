//Concept:  Call Stack -> Web API -> micro-tack Q -> Callback Q -> Event Loop
console.log('start')

setTimeout(()=> {
    console.log('set')
},0)

console.log(Promise.resolve("pr"))
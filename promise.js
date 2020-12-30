const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        // resolve({email: "jtihin"})
        reject(new Error("Failed"))
    },1500)
})

promise.then(user => {
    console.log('success')
    console.log(user);
})
.catch(err => {
    console.log('error')
    console.log(err)
})
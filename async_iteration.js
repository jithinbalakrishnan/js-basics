// https://rsharma.in/posts/posts.html

let numArray = [5, 2];
let arrayOfPromises = [];


numArray.forEach((item) => {
    arrayOfPromises = [...arrayOfPromises, new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("after" + item + "seconds")
        }, item * 1000);
    })]
});


(async () => {
    for(elem of arrayOfPromises) {
        elem.then((res) => {
            console.log(res);
        })
    }
})();


(async () => {
    for await ( elem of arrayOfPromises) {
            console.log(elem);
            // elem.then((res) => {
            //     console.log(res);
            // })
    }
})()


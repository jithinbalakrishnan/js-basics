//JS async

// function getName () {
//     console.log("Jithin")
// }

// console.log("Start");


// function loginUser (email, password, callback) {
//     setTimeout(()=> {
//         // return {email: email}
//         callback( {email: email})
//     },1000);
// }


// function getUserVideos (callback) {
//     setTimeout(() => {
//         callback (['video1', 'video2', 'video2'])
//     },2000)
// }
// function getVideoInfo (callback) {
//     setTimeout(() => {
//         callback ("Title")
//     },2000)
// }

// const user = loginUser("jithin@kommunicate.io", 123456, (user) => {
//     console.log(user)
//     getUserVideos((videos)=>{
//         console.log(videos)
//         getVideoInfo((title) => {
//             console.log(title)
//         })
//     })
// });


// console.log("end")


// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve({user: "Jithin"})
//     }, 2000)
// });

// promise.then(user => {

//     console.log(user);
// })


function loginUser (email, password) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("promise 1")
            resolve( {email: email})
        },1000);
    })
}

function getVideos (user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("promise 2 show the user", user)
            resolve (['video1', 'video2', 'video2'])
        },2000)
    })
}
function getVideoInfo (video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("promise 3 video info ", video)
            resolve ("Title")
        },2000)
    })
}

// loginUser("jithin@kommunciate.io", 123456)
//     .then(user => {console.log(user); return getVideos(user)} )
//     .then(videos => getVideoInfo(videos[0]))
//     .then( result => {console.log("done")} )


// async function displayUser () {
//     const loggedInUser = await loginUser("Jithin", 123456);
//     const videos = await getVideos(loggedInUser);
//     const videoInfo = await getVideoInfo(videos[0])

// }

// displayUser();

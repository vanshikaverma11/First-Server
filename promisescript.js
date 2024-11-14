//Creating a promise method. The promise will get resolved when timer times out after 6 seconds and 3 second.
let myPromise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise1 resolved")
    },6000)})

let myPromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise2 resolved")
    },3000)})

    myPromise1.then((successMessage) => {
        console.log("From Callback " + successMessage)
    })
    myPromise2.then((successMessage) => {
        console.log("From Callback " + successMessage)

    
})
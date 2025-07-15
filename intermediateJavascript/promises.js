let promiseResolve = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});

let promiseReject = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

let userLeft = false;
let userWatchingCatMeme = true;

function tutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject("User Left :(");
        } else if (userWatchingCatMeme) {
            reject("User dont like me no more");
        } else {
            resolve("User the goat");
        }
    });
}

tutorialPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });

let promise1 = new Promise((resolve, reject) => {
    resolve("recording complete");
});

let promise2 = new Promise((resolve, reject) => {
    resolve("recording complete");
});

let promise3 = new Promise((resolve, reject) => {
    resolve("recording complete");
});

Promise.all([promise1, promise2, promise3]).then((message) => {
    console.log(message);
});

Promise.race([promise1, promise2, promise3])
    .finally(() => {
        console.log("and the result is");
    })
    .then((message) => {
        console.log(message);
    });

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
}

delay(3000).then(() => alert("runs after 3 sec"));

// Promises

const promise = new Promise(function (resolve, reject) {
    resolve({name: "Clément"});
    //reject();
});

promise.then(() => {
    console.log("Promise resolved");
}).then(() => {
    console.log("Promise resolved");
}).catch(() => {
    console.log("Promise reject");
});

// All

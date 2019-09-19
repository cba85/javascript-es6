// Oject properties
let a = 1
let b = 4

let object = {
    a,
    b,
    foo() {
        console.log("foo")
    }
}

object.foo();

// Destucturing
function foo() {
    let count = 3;
    let list = [1, 2, 3];
    return {count, list};
}

// 1. ES5
/*
let result = foo();
let count = result.count;
let list = result.list;
*/

// 2. ES6
let {count, list} = foo();
console.log(count, list)
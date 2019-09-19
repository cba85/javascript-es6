var a  = 3;

// 1
(function () {
    console.log(a);
    var a = 5;
})();

// 2
(function () {
    var a;
    console.log(a);
    a = 5;
})();

// 3
if (false) {
    var b = 4;
    //let b = 4;
}
console.log(b);

// 4
function foo() {
    console.log(4)
}

function foo() {
    console.log(5)
}

foo()
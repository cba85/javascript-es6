// 1. Closure simulation

function foo() {
    var a = 2;
    function bar() {
        console.log(a);
    }
    // 1)
    //bar();
    // 2
    //return bar;
    // 3)
    baz(bar);
}

// 1)
//foo();

// 2)
//var baz = foo();
//baz();

// 3)
function baz(fn) {
    fn();
}
foo();

// 2.a Closure example
for (var i = 0; i < 4; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// 2.b Closure example
var i = 0;
setTimeout(function () {
    console.log(i);
}, 1000);
i++;
setTimeout(function () {
    console.log(i);
}, 1000);
i++;
setTimeout(function () {
    console.log(i);
}, 1000);
i++;
setTimeout(function () {
    console.log(i);
}, 1000);
i++;

// 2.c Closure example
var i;
for (i = 0; i < 4; i++) {
    (function() {
        var j = i;
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })();
}

// 2.d Closure example
var i;
for (i = 0; i < 4; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    })(i);
}

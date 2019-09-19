// Rest operator
function test(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

test(1, 2, 3, 4, 5, 6);

function createUser(name, age, ...interests) {
    console.log(name)
    console.log(age)
    console.log(interests)
}

createUser("Clément", 31, 'sport', 'music', 'code')
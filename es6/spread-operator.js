// Spread operator
function test(a, b, c) {
    console.log(a, b, c);
}

test(1, 2, ...[3, 4])

function addUsers(user1, user2, user3) {
    console.log(user1, user2, user3);
}

let users = [
    {username: "Clement"},
    { username: "Tomy" },
    { username: "Jacques" },
];

//addUsers(users[0], users[1], users[2])
addUsers(...users)
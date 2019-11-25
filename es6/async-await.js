// Async and await

function getUsers() {
    return [
        {name: "Clément"},
        {name: "Tomy"}
    ];
}

async function getData() {
    const users = await getUsers();
    console.log(users)
}

getData();
const array = [1, 2, 3, 4, 5, 6, 7];

const filteredArray = array.filter(a => {
    return a % 2 == 0;
});

console.log(filteredArray);

const mappedArray = array.map(a => {
    return a % 2 == 0;
});

console.log(mappedArray);

const reducedArray = array.reduce((a, b) => {
    //console.log(a, b);
    return a + b;
});

console.log(reducedArray);

const mixedArray = array
.filter(a => a % 2 == 0)
.map(a => a * a)
.reduce((a, b) => a + b);

console.log(mixedArray);

const orders = [
    {
        userId: 1,
        amount: 10
    },
    {
        userId: 2,
        amount: 5
    },
    {
        userId: 1,
        amount: 30
    },
];

const sortedOrders = orders.filter(order => order.userId == 1)
    .map(order => order.amount)
    .reduce((a, b) => a + b);
console.log(sortedOrders);
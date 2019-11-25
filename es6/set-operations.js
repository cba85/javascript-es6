const set = new Set([1, 23, 4, 5, 6]);
const set2 = new Set([1, 4, 6]);

const array = [...set];
console.log(array);
// Or
console.log(Array.from(set))

const arr = [...set].filter(a => set2.has(a));
console.log(arr);

const intersection = new Set([...set].filter(a => set2.has(a)));

for(let item of set) {
    if (set2.has(item)) {
        intersection.add(item);
    }
}
console.log(intersection);

const difference = new Set([...set].filter(a => !set2.has(a)));
console.log(difference);
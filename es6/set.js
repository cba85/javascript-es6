const set = new Set([1, 23, 4, 5, 6]);
set.add(7);

console.log(set);

console.log(set.has(23));

set.delete(23);

console.log(set.has(23));

console.log(set.size);

console.log(set.keys());
console.log(set.values());

for (let item of set) {
    console.log(item);
}

set.clear();

console.log(set);

console.log(set.size);
let map = new Map;

map.set("name", "Clement");

console.log(map.has('name'));
console.log(map.get('name'));

for (let key of map.entries()) {
    console.log(key);
}

map.delete('name')
console.log(map);
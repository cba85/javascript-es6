const clement = { name: "Clement" };
const jacques = { name: "Jacques" };
const weakSet = new WeakSet([clement, jacques]);
console.log(weakSet);

console.log(weakSet.has(clement))
console.log(weakSet.has({name: "Jacques"}))
// Todo with dev tools of the navigator to see __proto__

// 1. Object create
const user = {
    name: "Clément",
    surname: "Barbaza"
};

const me = Object.create(user);

me.name = "Coralie";

user.age = 30;

console.log(me);
console.log(me.surname);
console.log(me.age);

// 2.a String
let a = new String("string");
console.log(a);
console.log(a.toString());

// 2.b String
String.prototype.trim = function () {
  console.log("trim");
};
console.log(a);
console.log(a.toString());

// 2.c String
String.prototype.trim = function () {
    console.log("trim");
};
Function.prototype.test = function() {};
Function.prototype.test2 = function () {
    console.log("test2");
};
console.log(a);
console.log(a.toString());
console.log(a.trim.test2())
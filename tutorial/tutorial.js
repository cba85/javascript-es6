// VARIABLES

var bob = 5; // Old school way
const joe = 6; // Can't reassigned
let tom = 7; // reassigned

// FUNCTIONS

const add = function (a, b) {
    return a + b;
}
console.log(add(1, 2)); // 3

const newAdd = (a, b) => {
    // Mode code...
    return a + b;
}
console.log(newAdd(1, 2)); // 3

// Return only
const newAdd2 = (a, b) => a + b;
console.log(newAdd2(1, 2)); // 3

// Return only and one parameter only
const add5 = x => x + 5;

const numbers = [1, 2, 3];
console.log(numbers.map(x => x + 5));
numbers.map(function (x) {
    return x + 5;
});

// Default values in function
const double = (x = 5) => x * 2;
console.log(double()); // 10
console.log(double(2)); // 4

// SPREAD OPERATOR

const joinMe = (...args) => args.join(", ");
console.log(joinMe(1, 2, "hey")); // 1, 2, hey

const sub = (a, b) => a - b;
const array = [5, 3];
console.log(sub(array[0], array[1]));
console.log(sub(...array));

const newArray = [9, ...array];
console.log(newArray);

const colorMap = {
    blue: "red",
    red: "yellow",
};

const newColorMap = {
    ...colorMap
};
newColorMap;

// STRING TEMPLATES

const firstname = "Clément";
const lastname = "Barbaza";

const name = firstname + " " + lastname;
console.log(name); // Clément Barbaza

const newName = `${firstname} ${lastname}`;
console.log(newName); // Clément Barbaza

// OBJECTS

const user = {
    firstname: firstname,
    lastname: lastname
};
console.log(user); // { firstname: 'Clément', lastname: 'Barbaza' }

const user2 = { firstname, lastname };
console.log(user2); // { firstname: 'Clément', lastname: 'Barbaza' }

const user3 = {
    fistname: "Firstname value",
    [firstname]: "Clément"
};
console.log(user3); //  fistname: 'Firstname value', 'Clément': 'Clément' }

const functionInObject = {
    a: x => x + 3,
    b(x) {
        return x + 3;
    }
};

console.log(functionInObject.a(5)); // 8
console.log(functionInObject.b(5)); // 8

// OBJECT DESTRUCTURING

const alpha = ["a", "b", "c", "d", "e"];
const [first, second] = alpha;
const [begin, ...other] = alpha;
console.log(first); // a
console.log(second); // b
console.log(other); // [ 'b', 'c', 'd', 'e' ]

const object = {
    age: 5,
    height: 100,
    weight: 20,
};
//const age = object.age;
const {age} = object;
console.log(age); // 5

const { age: random } = object;
console.log(random); // 5

const { school = "Webstart" } = object;
console.log(school); // Webstart

const toString = person => `${person.age} - ${person.height} - ${person.weight}`;
console.log(toString(object)); // 5 - 100 - 20

const toString2 = ({ age, height, weight }) => `${age} - ${height} - ${weight}`;
console.log(toString2(object)); // 5 - 100 - 20

const grapFirst = ([first]) => first;
console.log(grapFirst([1, 2, 3])); // 1

// NESTED DESTRUCTURING

console.log(object); // { age: 5, height: 100, weight: 20 }
const nestedObject = {
    one: {
        ...object,
        two: object
    },
};
console.log(nestedObject);
/*
{ one:
   { age: 5,
     height: 100,
     weight: 20,
     two: { age: 5, height: 100, weight: 20 } } }
*/

const { one: { two:  { age: q} } } = nestedObject;
console.log(q); // 5

const { one } = nestedObject;
const { two } = one;
const { height: t } = one;
console.log(t); // 100

const objectArray = [object];
console.log(objectArray); // [ { age: 5, height: 100, weight: 20 } ]

const [{ height: h }] = objectArray;
console.log(h); // 100
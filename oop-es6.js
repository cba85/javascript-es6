// ES6
class User {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}

class Student extends User {
    constructor(name, studentNumber) {
        super(name);
        this.studentNumber = studentNumber;
    }
}

// 1 - User
//let user = new User("Clement");
//user.sayHello();

// 2. Student
let student = new Student("Clement", 10);
student.sayHello();

// ES5
/*
var User = function(name) {
    this.name = name;
}
User.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`)
}
*/
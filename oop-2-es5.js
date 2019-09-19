// Classes inheritance

function User(name) {
    this.name = name;
    this.sayHello = function () {
        console.log(`Hello i am ${this.name}`)
    }
}

function Student(name, studentNumber) {
    // 2.
    User.call(this, name);
    this.studentNumber = studentNumber
}

Student.prototype = Object.create(User.prototype);
// 1.
Student.prototype.constructor = Student;

let student = new Student("Clément", 10);
console.log(student)
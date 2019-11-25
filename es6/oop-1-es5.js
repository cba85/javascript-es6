// Classes creation

function User() {
    this.name = "Clement";
    this.sayHello = function () {
        console.log(`Hello my name is ${this.name}`)
    }
 }

 let user = new User;
 user.sayHello();
 console.log(user);

 /*
 User.prototype.sayHello = function () {

 };
 */
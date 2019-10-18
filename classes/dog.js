class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const caramel = new Dog('Caramel');
console.log(caramel.name);
console.log(caramel.behavior);
caramel.incrementBehavior();
console.log(caramel.name);
console.log(caramel.behavior);
'use strict';

const account = {
  owner: 'Junaid',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
account.latest = 50;

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log(this);
    console.log('Hey there 👏');
  }
}

const junaid = new PersonCl('Junaid Khan', 1984);

// Lecture 215 starts

// this static 'from' method here is really attached to the entire constructor, so the Array constructor and not to the prototype property of the constructor
console.log(Array.from(document.querySelectorAll('h1')));

//  we could not use the from method on an Array obj
//[1, 2, 3].from(); // Uncaught TypeError: [1,2,3].from is not a function, similar

const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  /*this.calcAge = function () {
    return 2037 - this.birthYear;
  };*/
};

// add a static method tot he constructor function

Person.hey = function () {
  console.log(this); // this is entire Person constructor function defined above
  console.log('Hey there 👏');
};

Person.hey();
PersonCl.hey();
// we cannot say haroon.hey because it is simply not in the prototype of the haroon object.
/*const haroon = new Person('Haroon', 1996); 
haroon.hey();*/ // Uncaught TypeError: haroon.hey is not a function
// Lecture 215 ends

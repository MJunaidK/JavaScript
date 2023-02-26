'use strict';

const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  /*this.calcAge = function () {
    return 2037 - this.birthYear;
  };*/
};

// 1. New {} is created
// 2. function is called, this={}
// 3. {} linked to prototype
// 4. function automatically return {}
const person = new Person('Mohammad Junaid', 1984);
const person1 = new Person('Mohammad Jawaid', 1964);
const person2 = new Person('Salma Khan', 1966);
console.log(person);
console.log(person1);
console.log(person2);

console.log(person instanceof Person); // True

const golu = 'Golu';
console.log(golu instanceof Person); // False

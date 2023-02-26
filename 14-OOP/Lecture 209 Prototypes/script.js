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
const junaid = new Person('Mohammad Junaid', 1984);
const jawaid = new Person('Mohammad Jawaid', 1964);
const salma = new Person('Salma Khan', 1966);
console.log(junaid);
console.log(jawaid);
console.log(salma);

console.log(junaid instanceof Person); // True

const golu = 'Golu';
console.log(golu instanceof Person); // False

// Lecture 209 starts

//  Each and every function (including constructor functions, (Person here)) in JavaScript automatically has a property called prototype, every object that's created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property.

console.log(Person.prototype);

// Add a method to this prototype property

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

// Each object created by this constructor function will now get access to all the methods of this prototype property.

// we can now use calcAge method here on the junaid object even though it is not really on the object itself
junaid.calcAge(); // 53
salma.calcAge(); // 71

// Each object has a special property called a underscore underscore proto

// In the new operator's step number three which links the empty new object to the prototype. And so basically, it is this step number three which will create this proto property. and it sets its value to the prototype property of the function that is being called. Again it sets the proto property on the object to the prototype property of the constructor function. this is how JavaScript knows internally that the Junaid object is connected to person dot prototype.

// Prototype of junaid object
console.log(junaid.__proto__);

// Prototype of the Junaid object is essentially the prototype property of the constructor function.
console.log(junaid.__proto__ === Person.prototype); // true

// Person.prototype here is actually not the prototype of person. But instead, it is what's gonna be used as the prototype of all the objects that are created with the person constructor function

console.log(Person.prototype.isPrototypeOf(junaid)); // true
console.log(Person.prototype.isPrototypeOf(salma)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// Think prototype property as prototype of linked objects property.
// .prototypeOfLinkedObjects

// Set properties on the prototype
Person.prototype.species = 'Homo Sapiens';

// Both of these objects will then inherit so they will get access to this property from the prototype.
console.log(junaid, salma);

// own properties are only the ones that are declared directly on the object itself. So, not including the inherited properties.
console.log(junaid.hasOwnProperty('firstName')); // true
console.log(junaid.hasOwnProperty('species')); // false
// Lecture 209 ends

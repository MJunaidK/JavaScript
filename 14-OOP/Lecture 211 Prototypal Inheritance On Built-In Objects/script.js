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

// Lecture 211 starts

// this is the prototype of Jonas which is exactly the prototype property of person.
console.log(junaid.__proto__);

// this is  prototype property of object
console.log(junaid.__proto__.__proto__);

// null as object.prototype is usually the top of the scope chain
console.log(junaid.__proto__.__proto__.__proto__);

// person.prototype itself has a constructor property which as we said, will point back to the person itself.
console.dir(Person.prototype.constructor);

// whenever we create an array like this, it is indeed created by the array constructor. new Array === []
const arr = [3, 6, 6, 4, 5, 6, 9, 9];

// proto of array obj here is the prototype of array and has all the array methods like findIndex,filter, fill etc
// each array does of course not contain all of these methods but instead, each array will inherit these methods from its prototype.
console.log(arr.__proto__);

// the prototype property of the constructor is gonna be the prototype of all the objects created by that constructor.
console.log(arr.__proto__ === Array.prototype); //true

// this is  prototype property of object
console.log(arr.__proto__.__proto__);

//  we know at this point, that any array inherits all their methods from it's a prototype. And therefore we can use that knowledge to extend the functionality of arrays. we can add any new method to this prototype and all the arrays will then inherit it. --Not a good idea--

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// we added a new method to the prototype property of the array constructor. And so therefore now all arrays will inherit this method.
console.log(arr.unique());

//  built-in objects
const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(h1.__proto__); // prototype is an HTMLHeadingElement
console.dir(h1.__proto__.__proto__); // prototype is an HTMLElement
console.dir(h1.__proto__.__proto__.__proto__); // prototype is an Element
console.dir(h1.__proto__.__proto__.__proto__.__proto__); // prototype is an Node
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__); // prototype is an EventTarget

// function itself is also an object. And so therefore it also has a prototype.

const fn = x => x + 1;
console.dir(fn);

//  prototype will then contain the methods that we have used previously on functions. So that's apply, bind and call, remember. And so once again this is the reason why we can actually call methods on functions. It's because they are objects and objects have prototypes. And in this case, this function prototype.
console.dir(fn.__proto__);

console.dir(fn.__proto__.__proto__); // prototype is an Object

// Lecture 211 ends

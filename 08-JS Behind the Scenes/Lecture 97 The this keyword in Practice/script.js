'use strict';
// this in global scope - js global window object
console.log(this);

// this in regular function - undefined as call of this function is without the function being attached to any object
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1984);

// this in arrow function - js global window object; arrow function simply uses the lexical this keyword, which means that it uses the disc keyword of its parent function or of its parents scope.
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1984);

// this inside a method: this will be the object that is calling the method. Here it is junaid object
const junaid = {
  year: 1984,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

junaid.calcAge();

const alvia = {
  year: 2016,
};
alvia.calcAge = junaid.calcAge;
alvia.calcAge(); // this.year in the calcAge will be taken from alvia's object and not from junaid hence this keyword is really dynamic. It's not static and it depends on how the function is called.

//f function is not attached to any object. There is no owner of this F function. This is like a regular function hence this is undefined, this.year will give error.
const f = junaid.calcAge;
f();

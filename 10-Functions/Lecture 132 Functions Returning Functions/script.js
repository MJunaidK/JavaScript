'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
console.log(greeterHey);
greeterHey('Mohammad');
greeterHey('Junaid');

greet('Hi')('Khan');

// Challenge - Rewrite using arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Mohammad Junaid Khan');

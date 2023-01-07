'use strict';
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'junaid',
  age: 39,
};

const friend = me;
friend.age = 27;
console.log('me ', me);
console.log('Friend', friend);

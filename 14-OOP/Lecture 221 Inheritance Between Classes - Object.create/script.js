'use strict';

// Object.create to essentially manually set the prototype of an object,
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const junaid = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  //  manually set the this keyword using call
  // It can be used to invoke (call) a method with an owner object as an argument (parameter). With call(), an object can use a method belonging to another object.
  // Set the this object properties(firstName, birthyear), from the method defined by call(init in this case)
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const salma = Object.create(StudentProto);
console.log(salma);
console.log(salma.__proto__);
console.log(salma.__proto__.__proto__);

salma.init('Salma Khan', 1996, 'Computer Science');
salma.introduce();
salma.calcAge();

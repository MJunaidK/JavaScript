'use strict';

const junaid = {
  firstName: 'Mohammad Junaid',
  lastName: 'Khan',
  birthYear: 1984,
  job: 'Architect',
  friends: ['I', 'Me', 'MySelf'],
  hasDriversLicense: true,
  /*calcAge: function (birthYear){
    return 2022 - birthYear;
  }*/

  /*calcAge: function(){
   // console.log(this);
    return 2022 - this.birthYear;
  }*/

  calcAge: function(){
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()} years old, ${this.job}, and he has ${this.hasDriversLicense? 'a': 'no'} driver's license.`;
  }
};

/* const calcAge = function(birthYear){
  return 2022 - birthYear;
}*/

//console.log(junaid.calcAge(1984));
//console.log(junaid['calcAge'](1984));

console.log(junaid.calcAge());

//console.log(junaid.calcAge());
//console.log(junaid.calcAge());
//console.log(junaid.calcAge());

console.log(junaid.age);
console.log(junaid.age);
console.log(junaid.age);

// Challenge 
// "Junaid is 38 years old Architect, and he has  a driver's license"
console.log(junaid.getSummary());

/*
Instructor Code

// Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/






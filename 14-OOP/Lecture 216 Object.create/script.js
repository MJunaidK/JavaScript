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
console.log(junaid);
junaid.name = 'Junaid';
junaid.birthYear = 1984;
junaid.calcAge();

// personal proto should in fact, be the prototype of junaid.
console.log(junaid.__proto__ === PersonProto); // true

const salma = Object.create(PersonProto);
salma.init('Salma', 1990);
salma.calcAge();

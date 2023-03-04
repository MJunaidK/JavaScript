'use strict';

//  getters and setters work for any regular object in JavaScript.
const account = {
  owner: 'Junaid',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  // setter method needs to have exactly one parameter.
  set latest(mov) {
    this.movements.push(mov);
  },
};

// We don't call the getter method, but instead we write it as if it was just a property.
console.log(account.latest);

//set it just like we set any other property
account.latest = 50;
console.log(account.movements);

// classes do also have getters and setters, and they do indeed work in the exact same way.

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  // getter
  get age() {
    return 2037 - this.birthYear;
  }

  // setter: setting a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const junaid = new PersonCl('Junaid Khan', 1984);
console.log(junaid.age);

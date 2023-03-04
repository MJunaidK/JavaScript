'use strict';

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log(this);
    console.log('Hey there 👏');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first because this call to the super function is responsible for creating the this keyword in this subclass
    super(fullName, birthYear);
    //console.log(this);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study, ${this.course} `);
  }

  calcAge() {
    console.log(
      `This is ${this.fullName} age, ${
        2037 - this.birthYear
      } calculated from child class by overriding the method`
    );
  }
}

const salma = new StudentCl('Salma Khan', 1996, 'Computer Science');
console.log(salma);
console.log(salma.__proto__);
console.log(salma.__proto__.__proto__);

salma.introduce();
salma.calcAge();

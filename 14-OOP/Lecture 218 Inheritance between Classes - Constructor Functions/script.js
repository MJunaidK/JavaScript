'use script';

//  constructor function for the Person
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//  constructor function for the Student
const Student = function (firstName, birthYear, course) {
  //  manually set the this keyword using call
  // It can be used to invoke (call) a method with an owner object as an argument (parameter). With call(), an object can use a method belonging to another object.
  // Call Person, set this inside that to the this Obj in Student which will be an empty object here and pass values for arguments.
  Person.call(this, firstName, birthYear);
  //this.firstName = firstName;
  //this.birthYear = birthYear;
  this.course = course;
};

// Linking Prototypes: to link these two prototype(Person and Student) objects, we are gonna use object dot create because defining prototypes manually is exactly what object dot create does.
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course} `);
};

const junaid = new Student('Junaid', 1984, 'Computer Science');
junaid.introduce();
junaid.calcAge();

console.log(junaid instanceof Student); // true
console.log(junaid instanceof Person); // true
console.log(junaid instanceof Object); // true

Student.prototype.constructor = Student;

console.log(junaid.__proto__);
console.log(junaid.__proto__.__proto__);

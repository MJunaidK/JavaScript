'use strict';

const junaid = {
  firstName: 'Mohammad Junaid',
  lastName: 'Khan',
  age: 2022-1984,
  job: 'Architect',
  friends: ['I', 'Me', 'MySelf']
}

console.log(junaid);

console.log(junaid.firstName);
console.log(junaid['firstName']);

const nameKey = 'Name';
console.log(junaid['first'+ nameKey]);
console.log(junaid['last'+ nameKey]);

//console.log(junaid.'first'+ nameKey);

const interestedIn = prompt(`What do you want to know about Junaid? Choose between firstName, LastName, age, job, friends`);
console.log(junaid.interestedIn);
console.log(junaid[interestedIn]);

if(junaid[interestedIn]){
  console.log(junaid[interestedIn]);
}else{
  console.log(`Wrong request! Choose between firstName, LastName, age, job, friends`);
}

junaid.location = 'USA';
junaid.email = 'test@test.com';
console.log(junaid);

// Challenge
// "Junaid has 3 friends and his best friend is myself"

console.log(`${junaid.firstName} has ${junaid.friends.length} and his best friend is ${junaid.friends[2]}`);

/*
Instructor Code

// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
*/






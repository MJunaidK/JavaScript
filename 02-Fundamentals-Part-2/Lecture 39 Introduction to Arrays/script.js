'use strict';

const friend1 = 'Junaid';
const friend2 = 'Ashish';
const friend3 = 'Prashant';

const friends = ['Junaid', 'Ashish', 'Prashant'];
console.log(friends);

const years = new Array(1984, 1990, 1995, 2000, 2006, 2008, 2009);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length] - 1);

friends[2] = 'Shailesh';
console.log(friends);

//friends = ['Pardhu', 'Varam'];

const junaid = ['Junaid', 'Khan', 2037-1984, 'Architect', friends];
console.log(junaid);
console.log(junaid.length);

const calcAge = function (birthYear){
  return 2023 - birthYear;
}

const dob = [1984, 1990, 1995, 2000, 2006, 2008, 2009];
console.log(calcAge(dob));

const age1 = calcAge(dob[0]);
const age2 = calcAge(dob[1]);
const age3 = calcAge(dob[dob.length - 1]);

const ages = [age1, age2, age3];
console.log(ages);
const ages1 = [calcAge(dob[0]), calcAge(dob[1]), calcAge(dob[dob.length - 1])];
console.log(ages1);

/*
Instructir code
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
'use strict';

// Function Expression
const calcAge2 = function(birthYear){
  return 2037 - birthYear;
}

// Arrow Functions

// Arrow function with one parameter and one line of code
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1984);
console.log(age3);

// Arrow function with one parameter and multiple lines of code
const yearsUntilRetirement = birthYear => {
  const age = 2037 -birthYear;
  const retirement = 65 - age;
  return retirement;
}
console.log(yearsUntilRetirement(1984));

// Arrow function with multiple parameter and multiple lines of code
const yearsUntilRetirementWithName = (birthYear, firstName) => {
  const age = 2037 -birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} has ${retirement} years left for retirement`;
}
console.log(yearsUntilRetirementWithName(1984, 'Junaid'));



'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    let reassign = `This variable can be reassigned inside block scope`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Hunny';
      const str = `oh! and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      //reassign = 'Oops ! Got reassigned in block scope';
      const reassign =
        'This is a new variable declaration and not reassignment';
    }
    //console.log(str);
    console.log(millenial);
    console.log(reassign);
    //add(1, 2);
  }
  printAge();
  return age;
}
//global variables
const firstName = 'Junaid';
calcAge(1984);
//console.log(age);
//printAge();

'use script';

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      âœ…
firstName           âœ…âœ…
someVariable        âœ…âœ…âœ…
calculateAge        âœ…âœ…âœ…âœ…
delayedDeparture    âœ…âœ…âœ…âœ…âœ…

HINT 1: Remember which character defines a new line in the textarea ðŸ˜‰
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the âœ…. Tackle that only after you have the variable name conversion working ðŸ˜‰
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK ðŸ˜€
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [index, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20)} ${'🎈'.repeat(index + 1)}`);
  }
});

// My attempt

/*document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const inputs = text.split('\n');
  let img = '🎈';
  for (let input of inputs) {
    const index = input.trim().indexOf('_');
    const trimmedInput = input.trim().replace('_', '');
    const camelCase =
      trimmedInput.slice(0, index).toLowerCase() +
      trimmedInput.slice(index, index + 1).toUpperCase() +
      trimmedInput.slice(index + 1).toLowerCase();
    const camelCaseSpace = camelCase.padEnd(20, ' ');
    const camelCaseSpaceImg = camelCaseSpace + img;
    img = img + '🎈';
    console.log(camelCaseSpaceImg);
  }
});*/

// Instructor solution
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'âœ…'.repeat(i + 1)}`);
  }
});
*/

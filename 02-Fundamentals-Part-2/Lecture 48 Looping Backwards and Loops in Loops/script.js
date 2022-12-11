'use strict';

const junaid = [
  'Junaid', 
  'Khan', 
  2037-1984, 
  'Architect', 
  ['Hunny', 'Juks','Undertaker'],
  true
];

for(let i= junaid.length-1; i>=0; i--){
  console.log(i, junaid[i]);
}

for(let excercise=1; excercise<4; excercise++){
  console.log(`------ Starting excercise ${excercise}-------`);
  for(let rep=1; rep < 6; rep++) {
    console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}`);
  }
}
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} ðŸ‹ï¸â€â™€ï¸`);
  }
}
*/
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
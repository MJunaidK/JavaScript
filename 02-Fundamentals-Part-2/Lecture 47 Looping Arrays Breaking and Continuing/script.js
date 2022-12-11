'use strict';

const junaid = [
  'Junaid', 
  'Khan', 
  2037-1984, 
  'Architect', 
  ['Hunny', 'Juks','Undertaker'],
  true
];

const types = [];

//console.log(junaid[0]);
// ...
//console.log(junaid[4]);
// junaid[5] does not exist

for(let i =0; i<junaid.length; i++){
  console.log(junaid[i], typeof junaid[i]);

  // types[i] = typeof junaid[i];
  types.push(typeof junaid[i]);
}
console.log(types);


const years = [1984, 2000, 2002, 2008, 2009];
const ages = [];
for(let i =0 ; i<years.length; i++){
  ages.push(2022- years[i]);
}
console.log(ages);

//continue and break

console.log('--- ONLY STRINGS ----')
for(let i =0; i<junaid.length; i++){
  if(typeof junaid[i] !== 'string') continue
  console.log(junaid[i], typeof junaid[i]);
}

console.log('--- BREAK WITH NUMBER ----')
for(let i =0; i<junaid.length; i++){
  if(typeof junaid[i] === 'number') break
  console.log(junaid[i], typeof junaid[i]);
}

/*
// Instructor Code
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}
*/


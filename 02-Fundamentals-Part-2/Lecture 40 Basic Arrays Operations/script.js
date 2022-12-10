'use strict';

const friends = ['Junaid', 'Ashish', 'Prashant'];

// Add elements
const newlength = friends.push('Shailesh');
console.log(friends);
console.log(newlength);

friends.unshift('Hunny');
console.log(friends);

// Remove elements
friends.pop(); //last
console.log(friends);
friends.pop()
console.log(friends);

friends.shift();
console.log(friends);

friends.push(23);
console.log(friends.indexOf('Junaid'));
console.log(friends.indexOf('Khan'));

console.log(friends.includes('Junaid'));
console.log(friends.includes('Khan'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if(friends.includes('Junaid')){
  console.log(`You have a friend called Junaid`);
}

/* 
Instructor code
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

*/



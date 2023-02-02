'use strict';

// take one of the values out of the array
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// last element of the array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

// At Method also works on strings.
console.log('junaid'.at(0));
console.log('junaid'.at(-1));

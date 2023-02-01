let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - Extract part of any array, does not mutate
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); //['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// SPLICE: same as SLICE but it mutate, it does actually change the original array.
// console.log(arr.splice(2)); //['c', 'd', 'e']
arr.splice(-1);
console.log(arr); // ['a', 'b', 'c', 'd']

//first parameter here works the same as in the slice method but the second one is really the number of elements that we want to delete.
arr.splice(1, 2);
console.log(arr); // [a,d]

// REVERSE: Reverse the array and does actually mutate the original array.

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

//CONCAT
const letters = arr.concat(arr2);
console.log(letters); //  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); //  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN
console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j

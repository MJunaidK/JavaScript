// Type Conversion
const inputYear =  '1991'
console.log(Number(inputYear), inputYear); //1991 '1991'
console.log(inputYear + 18); // 199118

console.log(Number('Junaid')); // NaN
console.log(typeof NaN); // number

console.log(String(23), 23); // 23 23

// Type Coercion
console.log('I am ' + 38 + 'Years old');//I am 38Years old
console.log('I am ' + '38' + 'Years old');//I am 38Years old
console.log('I am ' + String(38) + 'Years old'); //I am 38Years old

console.log('23' - '10' - 3); // 10
console.log('23' + '10' + 3); //23103
console.log('23' * '2'); //46
console.log('23' / '2'); // 11.5

let n = '1' + 1; // 11
n = n - 1;
console.log(n) // 10

console.log(2 + 3 + 4 + '5');// 95
console.log('10' - '4' - '3' - 2 + '5'); //"15"




'use strict';

// Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Junaid';
let job = 'Engineer';
const year = 1984;

// Functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

/*var addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;
*/

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All Products Deleted!`);
}
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

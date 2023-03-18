// Importing Module

// code in this module here is parsed, and before it is executed, all the code in the modules that it imports is executed first
//import './shoppingCart.js';
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing Module');

//console.log(shippingCost); //Uncaught ReferenceError: shippingCost is not defined
addToCart('bread', 5);
console.log(price, tq);

//  import all the exports of a module at the same time
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

// Importing default module, when we import default module we can basically give it any name that we want.

import add from './shoppingCart.js';
import { cart } from './shoppingCart.js'; // We should not mix a Default Export and a Named Export, here it is for illustration
add('pizza', 2);

//  imports are in fact, a live connection to exports.
add('Bread', 5);
add('Apple', 4);
console.log(cart); //  we do not see that empty object, that we export, but instead we have this array with the objects that proves that this import here, is in fact, not simply a copy of the value, Because if it was, then here we would simply get empty array, so they are in fact, the exact same object behind the scenes. Hence  imports are not copies of the export. They are instead like a live connection, and so what that means is that I point to the same place in memory

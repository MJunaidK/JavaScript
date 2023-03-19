'use strict';

// Export
// does not work as export is node.js keyword
export.addToCart = function (product, quality) {
  cart.push({ product, quality });
  console.log(`${quality} ${product} added to cart`);
};

// Import
// does not work as require is node.js function
const { addToCart } = require('./shoppingCart.js')


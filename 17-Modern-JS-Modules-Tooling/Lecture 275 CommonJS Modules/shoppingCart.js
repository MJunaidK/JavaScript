// Exporting Module

// Blocking code
// code in script.js actually has to wait for the code in shoppingCart.js to finish. So this top-level await that we have here is in fact blocking the execution, not only in this module, but also in the module that is importing it.
console.log('Start Fetching users');
const res = await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish Fetching users');

export const cart = [];
export const addToCart = function (product, quality) {
  cart.push({ product, quality });
  console.log(`${quality} ${product} added to cart`);
};
export default function (product, quality) {
  cart.push({ product, quality });
  console.log(`${quality} ${product} added to cart`);
}

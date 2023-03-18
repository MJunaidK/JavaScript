// Exporting Module
console.log('Exporting Module');

// variables that are declared inside of a module, So just like these two ones here, are actually scoped to this module.
const shippingCost = 10;
export const cart = [];

// Named exports: all we have to do is to put export in front of anything, that we might want to export.
// exports always need to happen in top level code; enclosing in condition and export will not work
// if(true){
export const addToCart = function (product, quality) {
  cart.push({ product, quality });
  console.log(`${quality} ${product} added to cart`);
};
// }

// export multiple things, at the same time, using Named Exports.
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as tq };

//  Default Exports when we only want to export one thing per module. no name is involved at all. when we import it we can basically give it any name that we want.

export default function (product, quality) {
  cart.push({ product, quality });
  console.log(`${quality} ${product} added to cart`);
}

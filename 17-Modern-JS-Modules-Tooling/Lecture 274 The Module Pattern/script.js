'use strict';

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quality) {
    cart.push({ product, quality });
    console.log(`${quality} ${product} added to cart`);
    console.log(`shipping cost is ${shippingCost}`); // private properties works
  };

  const addToStock = function (product, quality) {
    console.log(`${quality} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.totalPrice); //237
console.log(ShoppingCart2.shippingCost); //  properties that we basically wanted to make private, they are not accessible.

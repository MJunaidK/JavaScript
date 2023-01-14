'use strict';

const restaurant = {
  orderPizza: function (mainIngredients, ...optionalIngredients) {
    console.log(mainIngredients);
    console.log(optionalIngredients);
  },
};
console.log('-------OR-------');
// Use ANY data type, return ANY data type,short-circuiting
console.log(3 || 'Junaid');
console.log('' || 'Junaid');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//restaurant.numGuests = 15;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------AND--------');
console.log(0 && 'Junaid');
console.log(7 && 'Junaid');
console.log('Hello' && 23 && null && 'Junaid');

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

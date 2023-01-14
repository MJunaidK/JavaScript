'use strict';

// spread operator is used where we would otherwise write values, separated by a comma. -- Unpacking

// the rest pattern is basically used where we would otherwise write variable names separated by commas. -- Packing

// Data starts
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    console.log(this);
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    //don't have to match the order in which we do destructuring up here
    starterIndex = 1, //default value
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderKorma: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Korma with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderKebab: function (mainIngredients, ...optionalIngredients) {
    console.log(mainIngredients);
    console.log(optionalIngredients);
  },
};
//Data ends

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on theLEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Arrays
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

//rest pattern always must be the last in the destructuring assignment
//const [pizza1, , risotto1, ...otherFood1, bread] = [
//  ...restaurant.mainMenu,
//  ...restaurant.starterMenu,
//];
console.log(pizza, risotto, otherFood);

//Objects
const { thu, fri, ...weekends } = restaurant.openingHours;
console.log(thu, fri, weekends);
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions

const add = function (...numbers) {
  // unpack
  console.log(numbers);
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) sum += numbers[index];
  console.log(sum);
};
add(1, 2);
add(5, 3, 7, 2);
add(1, 2, 3, 4, 5, 6, 7, 8);

const x = [23, 5, 7];
add(...x); // packing

restaurant.orderKebab('Meat', 'Onions', 'chillies');
restaurant.orderKebab('Mutton');

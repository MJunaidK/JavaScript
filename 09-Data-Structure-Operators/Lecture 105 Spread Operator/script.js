'use strict';
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// expand an array
const newArr = [1, 2, ...arr];
console.log(newArr);

// pass arguments into functions

console.log(...newArr);

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
};
//Data ends

//New menu array
const newMenu = [...restaurant.mainMenu, 'Korma'];
console.log(newMenu);

//Shallow copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays,strings, map,sets. NOT Objects
const str = 'Junaid';
const letters = [...str, '', 'K'];
console.log(letters);
//console.log(`${...str} Khan`); This will not work as it is not a place that expects multiple values separated by a comma.

// Real world examples
const ingredients = [
  //  prompt("Let's make korma! Ingredient 1?"),
  // prompt("Let's make korma! Ingredient 2?"),
  // prompt("Let's make korma! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderKorma(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderKorma(...ingredients);

// Since ES2018 spread operator works with Object also
const newRestaurantObj = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Mohammad',
};
console.log(newRestaurantObj);
newRestaurantObj.name = `New India Hotel`;
console.log(newRestaurantObj.name);
console.log(restaurant.name); // original object will not change as we only updated copy

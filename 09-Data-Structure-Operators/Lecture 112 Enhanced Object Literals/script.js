'use strict';
// Data starts

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//ES6 we can actually compute property names instead of having to write them out manually and literally.
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

/*const openingHours = {
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
};*/

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,
  //openingHours: openingHours,
  /*openingHours: {
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
  },*/
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
  //ES6 we no longer have to create a property, and then set it to a function expression
  orderKorma(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Korma with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  /*orderKorma: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Korma with ${ing1}, ${ing2} and ${ing3}`
    );
  },*/
  orderKebab: function (mainIngredients, ...optionalIngredients) {
    console.log(mainIngredients);
    console.log(optionalIngredients);
  },
};
//Data ends

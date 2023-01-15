'use strict';
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

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (let item of menu) {
  //console.log(item);
}

console.log(menu.entries()); //Array Iterator {}
console.log([...menu.entries()]); //each item of that array is this new array.
// 0 : (2) [0, 'Pizza']
//(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// item is array and we can destructure it
for (const [index, el] of menu.entries()) {
  console.log(`${index + 1}: ${el}`);
}

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
};
//Data ends

//Property NAMES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values); //[{open: 12, close: 22},..]

// Entire Object : entries is basically names plus the values together
const entries = Object.entries(restaurant.openingHours);
console.log(entries); //['thu',{open: 12, close: 22}, ..]

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} We are open at ${open} and close at ${close} `);
}

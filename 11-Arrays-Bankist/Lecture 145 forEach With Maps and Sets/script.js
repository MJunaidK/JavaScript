'use strict';

// Map
const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['INR', 'Indian Rupees'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

// Set

const currenciesUnique = new Set(['USD', 'INR', 'USD', 'GBP', 'INR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key}:${value}`);
});

'use strict';

// Previous lecture code start
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
  },
};

lufthansa.book(239, 'Mohammad Junaid Khan');
lufthansa.book(635, 'Salma Khan');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EU',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
//book(23, 'My friend');

// Call Method
book.call(eurowings, 23, 'Mohd Jawaid Khan');
console.log(eurowings);

book.call(lufthansa, 239, 'Haroon Khan');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Fahmida Khan');
console.log(swiss);

//Apply Method
const flightData = [583, 'Alvia Khan'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Previous lecture code ends

//Bind method

// it will return a new function where this keyword will always be set to Eurowings

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Asli hunny');

// set in stone, certain arguments. A pattern called partial application
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Junaid');
bookEW23('Salma');

// WithEvent Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// this keyword would be lufthansa
lufthansa.buyPlane();

//In an event handler function, that this keyword always points to the element on which that handler is attached to which is the button element here

//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application :  means that we can preset parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value *0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Rewrite using one function returning another function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

'use strict';

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

'use strict';
const flight = 'LH234';
const junaid = {
  name: 'Mohammad Junaid Khan',
  passport: '123456789',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === '123456789') {
    alert('Checked In!');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, junaid);
console.log(flight);
console.log(junaid);

// Is the same as doing...
const flightNum = flight;
const passenger = junaid;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(junaid);
checkIn(flight, junaid);

'use strict';

const rest1 = {
  name: 'Best Bakery',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'City point',
  owner: 'Mohammad',
};

// OR Assignment Operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;
//console.log(rest1);
//console.log(rest2);

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

// AND assignment operator
//rest1.owner = rest1.owner && '<Anonymous>';
//rest2.owner = rest2.owner && '<Anonymous>';
rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';
console.log(rest1);
console.log(rest2);

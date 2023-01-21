'use script';

// empty map
const rest = new Map();
rest.set('name', 'City point');
rest.set(1, 'Bareilly, India');

//calling the set method like this does not only update the map that it's called on, but it also returns the map
console.log(rest.set(2, 'Nanital, India'));

//chaining the set
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open 🍕')
  .set(false, 'We are closed 😌');
console.log(rest);

// read data from a map we use the Get method
console.log(rest.get('name'));
console.log(rest.get(true));

//Data type of the key matters
console.log(rest.get('true'));
console.log(rest.get('1'));

// Taking advantage of boolean keys
const time = 21;
//const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Checking map contains a certain key
console.log(rest.has('categories'));

// delete elements
rest.delete(2);
console.log(rest);

// size
console.log(rest.size);

//use arrays or objects as map keys
rest.set([1, 2], 'Test');

// [1,2] while setting and get will not be same object in heap hence undefined is returned
console.log(rest.get([1, 2])); // undefined

// to fix this create a separate variable array
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // Test

// document.queryselector as key
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); // will add {key:h1,value: "Heading"}

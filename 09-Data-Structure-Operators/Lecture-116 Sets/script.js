'use strict';

// Set elements are unique and order does not matter.Sets are also iterables
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

// Sets are also iterables and so is string. So we can pass in a string. And so now we get a set with these five elements.
console.log(new Set('Junaid Khan')); // {"J","u","n","a","i","d"," ","K","h"}

// Set could also be empty
console.log(new Set());

//size of a set: unique value count
console.log(ordersSet.size);

// check if a certain element is in a set.
console.log(ordersSet.has('Pasta'));
console.log(ordersSet.has('Bread'));

//add new elements to a set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

//delete element from set
ordersSet.delete('Risotto');
console.log(ordersSet);

//sets there are actually no indexes. And in fact, there is no way of getting values out of a set.

//delete all of the elements of the set.
//ordersSet.clear();
console.log(ordersSet);

// sets are also iterables. We can loop over them.
for (const order of ordersSet) console.log(order);

//Example : Main use case of sets is actually to remove duplicate values of arrays

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique); //Set(3) {'Waiter', 'Chef', 'Manager'}

// Converting this set into array
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray); // ['Waiter', 'Chef', 'Manager']

// To find unique item count in an array
const uniquePosition = new Set([
  'Waiter',
  'Chef',
  'Waiter',
  'Manager',
  'Chef',
  'Waiter',
]).size;
console.log(uniquePosition); //3

// To find unique item count in a string
console.log(new Set('Junaid Khan').size); //9

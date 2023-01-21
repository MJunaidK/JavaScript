'use strict';
// Another way of populating a new map without having to use the set method by
// passing in an array and this array itself will contain  multiple arrays. And in each of these arrays, the first position is gonna be the key. And the second position is gonna be the value.
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// The array define in the map has the same structure as that of object.entries
const restaurant = {
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
};
console.log(Object.entries(restaurant.openingHours));

// We can use this trick whenever we need a map, when you already have an object.
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//maps are also iterables. And so the for loop is also available for them

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`${key}: ${value}`);
}
const answer = Number(prompt(`Your answer`));
console.log(answer);

// Taking advantage of boolean keys
console.log(question.get(question.get('correct') === answer));

// Convert Map to Array
console.log([...question]);

//Map also has same methids as that of arrays
console.log(question.entries()); //MapIterator {'question' => 'What is the best programming language in the world?', 1 => 'C', 2 => 'Java', 3 => 'JavaScript', 'correct' => 3, …}
console.log(question.keys()); //MapIterator {'question', 1, 2, 3, 'correct', …}
console.log(question.values()); //MapIterator {'What is the best programming language in the world?', 'C', 'Java', 'JavaScript', 3, …}

//Convert map to Arrays
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]); // ['question', 1, 2, 3, 'correct', true, false]
console.log([...question.values()]);

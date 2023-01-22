'use strict';
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: âš½ï¸ GOAL

GOOD LUCK ðŸ˜€
*/

const gameEvents = new Map([
  [17, 'âš½ï¸ GOAL'],
  [36, 'ðŸ” Substitution'],
  [47, 'âš½ï¸ GOAL'],
  [61, 'ðŸ” Substitution'],
  [64, 'ðŸ”¶ Yellow card'],
  [69, 'ðŸ”´ Red card'],
  [70, 'ðŸ” Substitution'],
  [72, 'ðŸ” Substitution'],
  [76, 'âš½ï¸ GOAL'],
  [80, 'âš½ï¸ GOAL'],
  [92, 'ðŸ”¶ Yellow card'],
]);

//1

// gameEvents.values() will create a MapIterator => {'GOAL', ..}
// [...gameEvents.values()] will convert map to Array with duplicate ['GOAL']
// new Set([...gameEvents.values()]) will create a set of unique  values
// [...new Set([...gameEvents.values()])] convert set to Array of unique values
const events = [...new Set([...gameEvents.values()])]; // set taking array iterable
const events1 = [...new Set(gameEvents.values())]; // set taking MapIterator
console.log(events);
console.log(events1);

// 2
gameEvents.delete(64);
console.log(gameEvents);

//3.

//const keys = [...gameEvents.keys()];
//const lastKey = keys.pop();
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4.

for (const [key, value] of gameEvents) {
  const str =
    key <= 45
      ? `[FIRST HALF] ${key}: ${value}`
      : `[Second HALF] ${key}: ${value}`;
  console.log(str);
}

// Instructor SOlution
/*
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

'use strict';
///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// ✈ Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//  ✈ Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

const schedule = flights.split('+');
for (const flight of schedule) {
  const [type, from, to, time] = flight.split(';');
  const icon = type.startsWith('_Delayed') ? '✈' : '';
  console.log(
    `${icon} ${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(
      to
    )} (${time.replaceAll(':', 'h')})}`.padStart(47)
  );
}

// Instructor solution

/*const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? 'ðŸ”´' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
*/

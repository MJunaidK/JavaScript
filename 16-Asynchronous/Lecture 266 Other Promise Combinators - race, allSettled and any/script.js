'use strict';

//  Code from previous lectures starts

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  });
};
//  Code from previous lectures ends

//  Promise.race, just like all other combinators, receives an array of promises and it also returns a promise. Now this promise returned by Promise.race is settled as soon as one of the input promises settles. Promise.race, basically the first settled promise wins the race.

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/italy`), timeout(0.2)])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.allSettled : It is from ES2020
// it takes in an array of promises again, and it will simply return an array of all the settled promises. And so again, no matter if the promises got rejected or not. So it's similar to Promise.all in regard that it also returns an array of all the results, but the difference is that Promise.all will short circuit as soon as one promise rejects, but Promise.allSettled, simply never short circuits. So it will simply return all the results of all the promises.

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

// Response for above
/* [
  {
    "status": "fulfilled",
    "value": "Success"
},
{
    "status": "rejected",
    "reason": "Error"
},
{
    "status": "fulfilled",
    "value": "Another Success"
}
]*/

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res)); // Uncaught (in promise) Error

// Promise.any
//  Promise.any takes in an array of multiple promises and this one will then return the first fulfilled promise and it will simply ignore rejected promises. So basically  Promise.any is very similar to Promise.race with the difference that rejected promises are ignored. And so therefore the results of Promise.any is always gonna be a fulfilled promise, unless of course all of them reject

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

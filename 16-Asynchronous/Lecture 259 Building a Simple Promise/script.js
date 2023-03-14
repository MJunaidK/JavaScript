'use strict';

// As the promise constructor runs, it will automatically execute this executor function that we pass in. And as it executes this function here, it will do so by passing in two other arguments resolve and reject.
//new Promise(function (resolve, reject) {});

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening!!!');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      // in order to set the promise as fulfilled, we use the resolve function.
      // into the resolved function here we pass the fulfilled value of the promise so that it can later be consumed with the then method.
      resolve('You win 🎉');
    } else {
      // to Mark this promise as rejected we use reject function.
      reject(new Error('You lost your money 😪'));
    }
  }, 2000);
});

// consuming this promise that we just built
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// we usually only built promises to basically wrap old callback based functions into promises. And this is a process that we call promisify. So basically promisify means to convert callback based asynchronous behavior to promise based.

// Promisifying setTimeOut

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 4 seconds'));

//  create a fulfilled or a rejected promise immediately. promise.resolve, basically this is a static method on the promise constructor.

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.error(x));

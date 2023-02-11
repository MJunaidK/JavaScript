'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Mohammad Jawaid Khan',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Salma Khan',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Mohammad Junaid Khan',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Haroon Khan',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // we need to actually create a copy, using the slice method and not the spread operator because here we are in the middle of a chain.
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} deposit</div>
    <div class="movements__value">${mov} EUR</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  /*const interests = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .reduce((acc, interest) => acc + interest, 0);*/

  const interests = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interests} EUR`;
};

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const createUsernames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
};
createUsernames(accounts);

//Event Handler
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  // In HTML default behavior when we click the Submit button, is for the page to reload
  // Prevent form from submitting
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc, index, arr) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23);

    // Delete account
    console.log(`deleting ${accounts.at(index)}`);
    accounts.splice(index, 1);

    // Hide account
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// reduce method
const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);

console.log(balance);

const balance1 = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 100);
console.log(balance1);

// reduce method arrow function

const balance2 = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance2);

// using for loop
let balance3 = 0;
for (const mov of account1.movements) {
  balance3 += mov;
}
console.log(balance3);

// reduce: Maximum value
const maxValue = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(maxValue);

const eurToUsd = 1.1;

console.log(movements);
// PIPELINE
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

//Debug
const totalDepositUSD1 = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    //console.log(arr);
    mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Salma Khan');
console.log(account);

// includes - testing for equality
console.log(movements);
console.log(movements.includes(-130));

//some - test for a condition
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// every -  all of the elements in the array satisfy the condition that we pass in.

console.log(movements.every(mov => mov > 0));
console.log(accounts.at(3).movements.every(mov => mov > 0));

//  Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// flat method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(account => account.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// Chaining

const overallBalance1 = accounts
  .map(account => account.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);

console.log(overallBalance1);

// flatMap method - goes one level deep and we cannot change it. If you want  go deeper than just one level, you still need to use the flat method.

const overallBalance2 = accounts
  .flatMap(account => account.movements)
  .reduce((acc, mov) => acc + mov);

console.log(overallBalance2);

// Sort method - mutates the original array.

// Strings
const owners = ['Salma', 'Junaid', 'Jawaid', 'Haroon', 'Fahmida'];
console.log(owners.sort());
console.log(owners);

// Numbers

console.log(movements);
// sort method does the sorting based on strings first, you have all the minuses here and so that's basically alphabetically the first string that occurs

//console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);

// Improved Ascending
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(movements);

// Improved Descending
movements.sort((a, b) => b - a);
console.log(movements);

//  Creating arrays until now
console.log([1, 2, 3, 4, 5, 6, 7]);

// Creating array using Array constructor and passing numbers as arguments
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Whenever we only pass in one argument, then it creates a new empty argument with that length
const x = new Array(7);
console.log(x);

// We cannot call the map() method when we create Array constructor with one argument it does nothing.

console.log(x.map(() => 5));

//one method that we can call on this empty array and that is the fill() method. this does  actually mutate the underlying array.

x.fill(1);
console.log(x);

// We can also specify where we want it to start and end to fill similar to slice method.
const x1 = new Array(7);
x1.fill(1, 3, 5);
console.log(x1);

x1.fill(23, 2, 6);
console.log(x1);

// Array.from - The Array.from static method creates a new,shallow-copied Array instance from an iterable or array-like object.
// array here is a function and then on this function object, we call the from() method
//we can first pass in an object with the length property. So let's set it to seven. And then the second argument is a mapping function. So it is exactly like the callback function that we pass into the map() method.

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  // Converting NodeList into Array using Array.from
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  );
  console.log(movementsUI);
  console.log(movementsUI.map(el => el.textContent.replace('EUR', '')));

  //  Another way to create Array, spread the results of this querySelectorAll() into a new array.

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

// Lecture 166 starts - Arrays Methods Practice

// 1. Calculate how much has been deposited in total in the bank.

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => (sum += cur), 0);

console.log(bankDepositSum);

// 2. How many deposits there have been in the bank with at least $1,000.

const newDeposits1000_1 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

const newDeposits1000_2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((sum, cur) => (cur >= 1000 ? ++sum : sum), 0);

console.log(newDeposits1000_1, newDeposits1000_2);

// 3. Goal is to create an object which contains the sum of the deposits and of the withdrawals.

const { depositsAmt, withdrawalsAmt } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      //cur > 0 ? (sum.depositsAmt += cur) : (sum.withdrawalsAmt += cur);
      sum[cur > 0 ? 'depositsAmt' : 'withdrawalsAmt'] += cur;
      return sum;
    },
    { depositsAmt: 0, withdrawalsAmt: 0 }
  );

console.log(depositsAmt, withdrawalsAmt);

// 4. Create a simple function to convert any string to a title case

const convertToTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      //exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
      exceptions.includes(word) ? word : capitalize(word)
    )
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertToTitleCase('this is a nice title'));
console.log(convertToTitleCase('this is a LONG title but not too long'));
console.log(convertToTitleCase('and here is another title with an EXAMPLE'));

// Lecture 166 ends

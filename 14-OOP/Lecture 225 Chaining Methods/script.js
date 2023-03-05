'use strict';

class Account {
  locale = navigator.language;
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // returning this will essentially make the method chainable
  }

  withdraw(val) {
    this.deposit(-val);
    return this; // returning this will essentially make the method chainable
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved!');
      return this; // returning this will essentially make the method chainable
    }
  }

  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('Helper');
  }
}

const acct1 = new Account('Junaid', 'USD', 1111);

// Chaining
acct1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved!');
    }
  }
}

const acct1 = new Account('Junaid', 'USD', 1111);
//acct1.movements.push(200);
//acct1.movements.push(-140);
acct1.deposit(200);
acct1.withdraw(140);
acct1.requestLoan(1000);
//acct1.approveLoan(1000);
console.log(acct1.getMovements());

console.log(acct1);
console.log(acct1._pin);

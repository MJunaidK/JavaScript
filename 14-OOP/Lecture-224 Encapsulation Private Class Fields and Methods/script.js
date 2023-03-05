'use strict';

// Public fields
// Private fields
// Public methods
// Private methods
// (There is also static version of these)

class Account {
  // 1) Public field instances: public fields they're also referenceable by the this keyboard
  locale = navigator.language;

  // 2) Private Fields instances
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
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

  // 4. Private Methods
  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('Helper');
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
//console.log(acct1.#pin); // Uncaught SyntaxError: Private field '#pin' must be declared in an enclosing class
// console.log(acct1.#movements); //Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class
//console.log(acct1.#approveLoan(100));
Account.helper();

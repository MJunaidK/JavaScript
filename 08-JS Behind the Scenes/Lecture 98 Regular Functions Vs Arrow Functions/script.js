'user strict';
//var firstName = 'Alvia';
const junaid = {
  firstName: 'Junaid',
  year: 1984,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    //const self = this;
    //const isMillenial = function () {
    //  console.log(self);
    //  console.log(self.year >= 1981 && self.year <= 1996);
    //};
    /*const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };*/

    // Solution 2

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.firstName}`);
  },
};
junaid.greet();
junaid.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);

  return a + b;
};
addExpr(2, 5);
console.log(addExpr(2, 3, 4, 5, 6, 7)); //5
const addArrow = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(addArrow(2, 5, 8)); // 7

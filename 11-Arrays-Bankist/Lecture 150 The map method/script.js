'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;
//const movementsUSD = movements.map(function (mov) {
//  return mov * eurToUSD;
//});

const movementsUSD = movements.map(mov => mov * eurToUSD);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUSD);
}
console.log(movementsUSDfor);

const movementsWithDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )} `
);
console.log(movementsWithDescription);

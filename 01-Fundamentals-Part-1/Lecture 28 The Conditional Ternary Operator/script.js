const age = 23;
age >= 18 ? console.log('I like to drink wine ๐ทยท') : console.log('I like to drink water ๐ฅ');

const drink = age >= 18 ? 'wine ๐ท' : 'water ๐ฅ';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine ๐ท';
} else {
  drink2 = 'water ๐ฅ';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine ๐ท' : 'water ๐ฅ'}`);

const age = 18;
if(age === 18) console.log(`You just became an adult 😀`);
console.log(18 === 18); // true
console.log(18 === 19); // false
console.log('18' == 18);  // true
console.log('18' === 18); // false

if(age === 18) 
console.log(`You just became an adult 😀 (strict)`);

if(age == 18)
console.log(`You just became an adult 😀 (loose)`);

//const favourite = prompt(`What's your favourite number?`);// returns string
const favourite = Number(prompt(`What's your favourite number?`));//returns number
console.log(favourite);
console.log(typeof favourite);

if(favourite == 23){ //'23' == 23
    console.log(`Cool! 23 is an amazing number (loose)`);
}

if(favourite === 23){ //23 === 23
    console.log(`Cool! 23 is an amazing number (strict)`);
} else if (favourite === 7){
    console.log(`7 is also a cool number`);
} else if (favourite === 9){
    console.log(`9 is also a cool number`);
} else { 
    console.log(`Number is not 23 or 7 or 9`);
}

if(favourite != 23){
    console.log(`Why not 23? (loose)`);
}

if(favourite !== 23){
    console.log(`Why not 23? (strict)`);
}
 

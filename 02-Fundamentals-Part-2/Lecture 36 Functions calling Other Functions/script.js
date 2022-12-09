'use strict';

function cutFruitPieces(fruit){
  return fruit * 4;
}

function foodProcessor(apples, oranges){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice; 
}
console.log(foodProcessor(2,3));
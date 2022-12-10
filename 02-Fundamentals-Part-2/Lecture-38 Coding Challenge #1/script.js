'use strict';

const calcAverage = (score1, score2, score3 ) => (score1 +  score2 + score3)/3;
const avgScoreDolphins = calcAverage(44, 23, 71);
const avgScoreKoalas = calcAverage(65, 54, 49);


const checkWinner = function (avgDolphins, avgKoalas){
  
  if(avgDolphins >= 2*avgKoalas){
    console.log(`Dolphin team wins with an average score of ${avgDolphins} vs ${avgKoalas}`);
  }else if(avgKoalas >= avgDolphins *2){
    console.log(`Koalas team wins with an average score of ${avgKoalas} vs ${avgDolphins}`);
  }else {
    console.log(`No Winner!!`)
  }
}

checkWinner(avgScoreDolphins, avgScoreKoalas);

// Instructor Code

const calcAverage1 = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage1(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage1(44, 23, 71);
let scoreKoalas = calcAverage1(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner1 = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ðŸ† (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ðŸ† (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner1(scoreDolphins, scoreKoalas);

checkWinner1(576, 111);

// Test 2
scoreDolphins = calcAverage1(85, 54, 41);
scoreKoalas = calcAverage1(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner1(scoreDolphins, scoreKoalas);





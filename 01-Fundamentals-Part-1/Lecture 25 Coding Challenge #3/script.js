const dolphinAvgScore = (97 + 112 + 101)/3;
const kolasAvgScore = (109 + 95 + 110)/3;
console.log(dolphinAvgScore, kolasAvgScore);
const minScore = 100;
const isDolphinMinScore = dolphinAvgScore >= minScore;
const isKolasMinScore =  kolasAvgScore>= minScore;

if(dolphinAvgScore > kolasAvgScore && isDolphinMinScore){
    console.log(`Dolphin team wins the trophy 🏆`);
}else if (dolphinAvgScore < kolasAvgScore && isKolasMinScore){
    console.log(`Kolas team wins the trophy 🏆`)
}else if ((kolasAvgScore> minScore && dolphinAvgScore > minScore) &&(dolphinAvgScore === kolasAvgScore)){
    console.log(`We have a draw!`)
}else{
    console.log(`No winner 😪`);
}

// Instructor Solution
/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy ðŸ†');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy ðŸ†');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy ðŸ†');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy ðŸ†');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy ðŸ˜­');
}
*/
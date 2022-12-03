const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBodyMassIndex = markWeight/markHeight ** 2;
const johnBodyMassIndex = johnWeight/johnHeight ** 2;

console.log(markBodyMassIndex + " " + johnBodyMassIndex);

if(markBodyMassIndex > johnBodyMassIndex){
    console.log(`Mark's BMI (${markBodyMassIndex}) is higher than John's ${johnBodyMassIndex})!`);
}else{
    console.log(`John's BMI (${johnBodyMassIndex}) is higher than Mark's! ${markBodyMassIndex})`);
}
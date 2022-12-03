const age = 6;
if(age >= 18 ){
 console.log("Alvia can apply for driving license 🚗");   
}else{
    const yearsLeft = 18 - age;
    console.log(`Alvia is too you young for driving. Please wait for another ${yearsLeft} years 😉`);
}

const birthYear = 2016;

let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);
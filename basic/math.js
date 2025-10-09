const score=400;
//console.log(score);

const balance=new Number(100);
//console.log(balance);
//console.log(balance.toString().length);
//console.log(balance.toFixed(1));
const otherNumber=123.966;
//console.log(otherNumber.toPrecision(4));
const hundreds=10000000;
//console.log(hundreds.toLocaleString('en-IN')) //the out will be 1,00,00,000

//////////////////////////////////////////////////////////////////////////////////

console.log(Math);
console.log(Math.abs(-4));// here the output will be the positive 4
console.log(Math.round(4.6));// the output will be the round of a number for here 4.6 is round of 5
console.log(Math.ceil(4.2));// the output will be the max of a number so here 4.2 is round of 5 so output will be 5
console.log(Math.floor(4.9));//the output willbe minimum round of number so here 4.9 min of 4 
console.log(Math.max(4,6,3,8));// max of the given number is  so output will be 
console.log(Math.min(4,3,6,8));// min of the given number so here min of the number is 3



//random pic the number functions
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);


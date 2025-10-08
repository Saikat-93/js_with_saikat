const name="saikat";
const place="kolkata";
//console.log(name+repoCount);
console.log(`hello my name is ${name} im from ${place}`);
const gameName=new String('saikat-ac');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);//length of the string
console.log(gameName.toUpperCase());//print uppercase out of string 
console.log(gameName.charAt(2));// 2 number position of character is showing
console.log(gameName.indexOf('t'));


const newString=gameName.substring(0,4);
console.log(newString);//output saik

const anString=gameName.substring(-8,4);
console.log(anString);//output aik

const newStringOne="       saikat    ";
console.log(newStringOne);//this output will be with space 
console.log(newStringOne.trim());// but if we use trim method the output will be remove spaces

const url="https//saikat.com/saikat23samanta"
console.log(url.replace('23','-'));

console.log(url.includes('saikat'));
console.log(gameName.split('-'));




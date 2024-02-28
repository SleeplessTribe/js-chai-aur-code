const score = 400;
const balance = new Number(100);
//console.log(balance.toString().length); //3
//console.log(balance.toFixed(2)); //100.00
const otherNumber = 123.8966;
//console.log(otherNumber.toPrecision(3)); //124
//console.log(otherNumber.toPrecision(4)); //123.9
//console.log(otherNumber.toPrecision(2)); //1.2e+2
const hundreds = 1000000;
//console.log(hundreds.toLocaleString()); //1,000,000 ->by default US formate
//console.log(hundreds.toLocaleString('en-in')); //10,00,000


/*================Maths========================*/
//console.log(Math); //Object [Math] {} -->return functions in browser console
//console.log(Math.abs(-4)); //4 -->return positive value
//console.log(Math.round(4.6)); //5 -->return upper value if precidence is 5 or greter 
//console.log(Math.round(4.4)); //4 -->return lower value if precidence is  less than 5
//console.log(Math.ceil(4.1)); //5 -->retur upper value
//console.log(Math.floor(4.9)); //4 -->retur lower value
//console.log(Math.min(4, 3, 6, 9)); //3 -->return minimum value
//console.log(Math.max(4, 3, 6, 9)); //9 -->return maximum value
 

//console.log(Math.random()); //return value between 0 and 1
//console.log(Math.random()*10); //shift one preciedent value means if random return 0.405534 then it return 4.05534
//console.log(Math.floor(Math.random()*10)); //0.405534 -> 4.05534 -> 4
//console.log(Math.floor(Math.random()*10)+1); //retrun value between 1 to 10

const min =10
const max =20
//console.log(Math.floor(Math.random()* (max - min + 1)) + min); //return value between 10 to 20

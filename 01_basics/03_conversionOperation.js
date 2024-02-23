let score = "33";
//console.log(typeof score); //string
let valueInNumber = Number(score); // convert any value into number
//console.log(typeof valueInNumber);//number
//console.log(valueInNumber); //33
/*
"33" => 33
"rashimi" => NaN
null => 0
undeffined => NaN
true => 1; false => 0
*/


let isLoggedIn = undefined;
let valueInBoolean = Boolean(isLoggedIn); //convert any value into boolean
//console.log(valueInBoolean); //1
/* 
1 => true; 0 => false
"" => false
"rashmikant" => true
null => false
undefined => false
*/

let name = undefined;
let valueInString = String(name); // convert any value in string
//console.log(typeof valueInString);
/*
"rashmi" => "rashmi"
33 => "33"
true => "true"
null => "null"
undefined => "undefined"
*/

/*==========Operation ==============*/

let value = 3;
let negValue = -value;
//console.log(negValue);

//console.log(2+2);     //4
//console.log(2-2);     //0
//console.log(2*2);     //4
//console.log(2**2);    //4
//console.log(2/2);     //1
//console.log(2%2);     //0

let str1 = "hello"
let str2 = " rashmikant"
let str3 = str1+str2
//console.log(str3); //hello rashmikant

//console.log("1" + 2); //12
//console.log(1 + "2"); //12
//console.log("1" + 2 + 2) //122
//console.log(1 + 2 + "2") //122
//console.log(1 + "2" + 2) //122

//console.log(+true) //1
//console.log(+"") //0 It convert empty string into number if there is only + sign before empty string 
                //and nothing after empty string 

let num1, num2, num3

num1 = num2 = num3 = 2 + 3 // not the good way

let gameCounter = 100;
//console.log(gameCounter++); //100 // before increament console.log display output
//console.log(++gameCounter); //101
/*
gameCounter++;
console.log(gameCounter); //101
*/
/*
++gameCounter;
console.log(gameCounter); //101
*/

/*
link to study
https://tc39.es/ecma262/multipage/abstract-operations#sec-type-conversion
*/
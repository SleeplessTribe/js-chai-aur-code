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
console.log(typeof valueInString);
/*
"rashmi" => "rashmi"
33 => "33"
true => "true"
null => "null"
undefined => "undefined"
*/
"use strict"; // treat all JS code as newer version.

//alert("hello"); //we are using nodeJS, not browser

let name = "rashmikant";
let age = 30;
let isLogged = false;
/*
DataTypes

--primitives
number => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value. prefer to return value not available(type object)
undefined => 
symbol => unique(for uniqness)

--non-primitives
object
*/

console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isLogged); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
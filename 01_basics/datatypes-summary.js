// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id == anotherId); //false

const bigInt = 4534343551351435453435n


//Reference (Non primitive)

//Array, Object, Functions
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "rashmikant",
    age : 22
}

const myFunction  = function (){
    console.log("Hello world")
}

//console.log(typeof myObj)

//https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory : Stack, Heap

//Stack use in primitive datatype and Heap memory use in non-primitive
//In Stack memory we get copy of variable, and in Heap we get reference of varible
//In stack, whatever you change in varible it change in copy of varible only
//In Heap, whatever you change in varible it change in original varible.  

//Stack
let myName = "Rashmikant";
let anotherName = myName;
anotherName ="Rashmi";
//console.log(myName) //"Rashmikant"
//console.log(anotherName) //"Rashmi"


//Heap
let userOne = {
    name : "Rashmikant",
    email : "rashmikant@mail.com"
}
let userTwo = userOne;
userTwo.name = "rashmi";
//console.log(userOne.name); //rashmi
//console.log(userTwo.name); //rashmi
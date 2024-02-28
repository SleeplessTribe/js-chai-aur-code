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
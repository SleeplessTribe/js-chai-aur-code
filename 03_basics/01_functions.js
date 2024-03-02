function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("M");
    console.log("I");
}
//sayMyName(); //function call
//sayMyName -> reference , sayMyName() -> execution

function addTwoNumber(num1, num2){
    console.log(num1+num2);
}
//addTwoNumber(3,4); //7
//addTwoNumber(3,"4"); //34
//addTwoNumber(3, null); //3
//const result1 = addTwoNumber(5,3);//8
//console.log(result1); //undefined  -> varible hold nothing untill function return something

function addition(num1, num2){
    return num1 +num2;
}
//const result2 = addition(5,3);
//console.log(result2); //8

function loginUserMessage(username){
    return `${username} just logged in`;
}
//console.log(loginUserMessage('rashmi')); //rashmi just logged in

function calculateCartPrice1(...num1){
    /* ...num1 is rest operator*/
    return num1; 
}
//console.log(calculateCartPrice1(200, 300, 400, 500)); //[ 200, 300, 400, 500 ]

function calculateCartPrice2(val1, val2, ...num1){
    return num1; 
}
//console.log(calculateCartPrice2(200, 300, 400, 500)); //[ 400, 500 ]

//Pass object as an argument
const user ={
    username : "rashmi",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user); //Username is rashmi and price is 199
/*
handleObject({
    username: 'rash',
    price : 399
}); //Username is rash and price is 399
*/

const myArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myArray)); //300
//console.log(returnSecondValue([300, 400, 500, 600])); //400


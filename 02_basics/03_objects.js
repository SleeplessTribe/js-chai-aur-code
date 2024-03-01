//singleton : Object create with  constructor then it will be singleton
//Object.create


//object literals

const JsUser = {
    name : 'rashmikant',
    "last name" : "Rathod",
    age : 30, 
    location: "navsari",
    email : 'rashmikant@mail.com',
    isloggedIn : false,
    lastLogin : ["Monday", "Saturday"]
}

//console.log(JsUser.email); //rashmikant@mail.com
//console.log(JsUser["email"]); //rashmikant@mail.com
//when key is defined as a string(in quatation "last name" with space) 
//then we can not assess with dot(.) operator "JsUser.last name"
//it gives error. to assess it we use JsUser["last name"]

//To change value
JsUser.email = 'rashmikant@gmail.com'
//Object.freeze(JsUser) //Not allowed to change value
JsUser.email = 'rashmikant@hotmail.com'
//console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS User");
}
//console.log(JsUser.greetings); // [Function (anonymous)]
//console.log(JsUser.greetings()) //Hello JS User

JsUser.greetings = function(){
    console.log(`Hello JS User, ${this.name}`);
}
//To asses current object value in same object function
//..then we can assess with this keyword  
//console.log(JsUser.greetings()) //Hello JS User, rashmikant


const mySym1 = Symbol("key1");
const mySym2 = Symbol("key2");

const myObj = {
    mySym1 : "Mykey1", //this is not correct way to use symbol as a key
    [mySym2] : "Mykey2" //this is the correct way to use symbol as a key
}
//console.log(myObj.mySym1); //Mykey1
//console.log(myObj.mySym2); //undefined ->you can't asses symbol with . operator
//console.log(myObj[mySym2]); //Mykey2
//console.log(myObj); //{ mySym1: 'Mykey1', [Symbol(key2)]: 'Mykey2' }

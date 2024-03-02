const user ={
    username: "rashmi",
    price : 999,
    welcomeMessage : function(){
        //console.log(`${this.username}, welcome to website`);
        console.log(this); // current context -> user object
        //{ username: 'rashmi', price: 999, welcomeMessage: [Function: welcomeMessage] }
    }
}
//user.welcomeMessage() //rashmi, welcome to website
//user.username = 'rashm'
//user.welcomeMessage() //rashm, welcome to website
//.console.log(this);//{}


/*
function chai(){
    console.log(this); // Object [global]{...}
    const username = 'rashmi'
    //console.log(this.username); //undefined
}
chai();
*/
/*
const chai = function(){
    let username = 'rashmi'
    console.log(this.username) //undefined
}
chai()
*/
/*
//Arrow function
const chai = () => {
    let username = 'rashmi'
    console.log(this.username)//undefined
}
chai()
*/

/*
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4)); //7
*/

/*
//implisit return  -> which not required return keyword to return data

const addTwo = (num1, num2) => num1 +num2;
//console.log(addTwo(3, 5)); //8

const addThree = (num1, num2, num3) => (num1 +num2 +num3);
//console.log(addThree(3, 5 ,2)); //10
*/

/*
const objExpl = () => {username : 'rashmi'}
console.log(objExpl()); //undefined

const objExpl1 = () => ({username : 'rashmi'})
console.log(objExpl1()); //{ username: 'rashmi' }
*/



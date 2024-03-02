var c = 40
//let a = 100
if(true){
    let a = 10
    const b =20
    var c = 30   
    //console.log(a); //10
}


 //console.log(a) // not allowed out off the scope
 //console.log(b) // not allowed out off the scope
 //console.log(c) //30 it's will over ride value if other file have same variable


 
 //Nested Scope -> child block can access parent property(variables)

 function one(){
    const username = 'rashmi'

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    //console.log(website); //error
    //two() // rashmi
 }
 //one()


if(true){
    const username = 'rashmi'
    if(username === 'rashmi'){
        const website = " youtube"
        //console.log(username + website); //rashmi youtube
    }
    //console.log(website) //can't access varible out-off block
}
//console.log(username) //can't access varible out-off block

//++++++++++++++++++++++++ interesting +++++++++++++++++++++++
// normal functin and expression( assign callback function to varibale )

//##1
function addone(num){
    return num + 1;
}
addone(5);
const addTwo = function(num){
    return num + 2;
}
addTwo(5);

//##2
//addThree(5); // works -> allowed call before function declaration
function addThree(num){
    return num + 3;
}
//addFour(5); Error -> not allowed call before function declaration
const addFour = function(num){
    return num + 4;
}



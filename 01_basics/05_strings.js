const name = "Rashmikant";
const repoCount = 5;

// old way
//console.log("My name is "+name+" and my repo count is "+repoCount);

//modern way (String interpolation)
//console.log(`My name is ${name} and my repo count is ${repoCount}`);  

//String declaration
const stringX = 'X';
const stringZ = new String('Z');
/*
In browser console
first declaration return only string value
    --> X
second declaration return object of String 
    --> String {'Z'}
            0: "Z"
            length: 1
            >[[Prototype]]: String
            //(it has functions like toUpperCase, toLowerCase, charAt etc)
            [[PrimitiveValue]]: "Z"


*/
const myString = new String('rashmikant ');
//console.log(myString.charAt(4)); //m
//console.log(myString.indexOf('k')); //6
//console.log(myString.substring(3, 6)); //hmi
//console.log(myString.slice(-10, 3)); //as
//console.log(myString.trim()) //rashmikant
//console.log(myString.replace('kant','')); //rashmi
//console.log(myString.includes('ant')); //true
//console.log(myString.split('a')); //[ 'r', 'shmik', 'nt ' ] - return an array



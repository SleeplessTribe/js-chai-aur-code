//array
const myArray = [1,2,3,4,5,6];
const myHeros = ["shaktiman", "naagraj"];
const myArr = new Array(9,8,7,6,5);
//console.log(myArr[0]);

//Array methods

//myArr.push(4); //add value in an array at last position
//myArr.pop(); //remove last value from an array
//myArr.unshift(0); // add value in an aray at first position
//myArr.shift(); //remove first value from an array
//console.log(myArr);

//console.log(myArr.includes(9)); //true if value not 
// console.log(myArr.indexOf(8)); //0 if value not exist then it retrun -1
//console.log(myArr.join()); //9,8,7,6,5 ->return as a String value of array

//slice, splice
//console.log("A", myArr); //A [ 9, 8, 7, 6, 5 ]
const myArrSlice = myArr.slice(1, 3); 
//console.log(myArrSlice);//[ 8, 7 ]
//console.log("B", myArr); //B [ 9, 8, 7, 6, 5 ]
const myArrSplice = myArr.splice(1, 3); 
//console.log("C", myArr);//C [ 9, 5 ]
//console.log(myArrSplice);//[ 8, 7, 6 ]


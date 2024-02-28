let myDate = new  Date();
//console.log(myDate); //return current time ->2024-02-28T15:33:56.554Z
//console.log(myDate.toISOString()); //2024-02-28T15:40:39.904Z
//console.log(myDate.toJSON()); //2024-02-28T15:40:39.904Z
//console.log(myDate.toString()); //return date in string ->Wed Feb 28 2024 15:37:39 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString()); //Wed Feb 28 2024
//console.log(myDate.toLocaleDateString()); //2/28/2024
//console.log(myDate.toLocaleTimeString()); //3:40:39 PM
//console.log(myDate.toTimeString()); //15:40:39 GMT+0000 (Coordinated Universal Time)

/* Note: month start from 0 in single digit JS*/

let myCreatedDate = new Date(2023, 0, 23);
//console.log(myCreatedDate); //2023-01-23T00:00:00.000Z
//console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
let myCreatedDateTime = new Date(2023, 0, 23, 5, 14);
//console.log(myCreatedDateTime.toLocaleString()); //1/23/2023, 5:14:00 AM
let myCreatedDateFormate = new Date("01-14-2024");
//console.log(myCreatedDateFormate.toLocaleString());//1/14/2024, 12:00:00 AM

let myTimeStamp = Date.now();
//console.log(myTimeStamp); //1709135491623 return time in miliseconds(GMT)
//console.log(myCreatedDate.getTime()); //1674432000000
//console.log(Math.floor(Date.now()/1000)); //1709135717 rewturn in seconds

let newDate = new Date();
//console.log(newDate); 
//console.log(newDate.getMonth()); //1
//console.log(newDate.getDay()); //3

//customize Date
newDate.toLocaleString('default' ,{
    month :"long"
});


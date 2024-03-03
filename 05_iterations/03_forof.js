//######## For of 

//["", "", ""],
//[{}, {}, {}]

/*for (const iterator of object) {  
}*/
const arr = [1, 2, 3, 4, 5]
/*for (const num of arr) {
    console.log(num)
}*/

const greetings = "Hello world!"
/*for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}*/


//######### Maps -> itself is object

//Read-only -> 
    //property -> size
    //methods -> entries(), forEach(), get(), has(), keys(), values(), and @@iterator  
//Writeable  
    //methods ->  clear(), delete(), and set().
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
//map.set('IN', "India") // not allowed duplicate key

//console.log(map)

/*for(const key of map){
    console.log(key)
}*/
/*for(const [key, value] of map){
    console.log(key, ': - ', value)
}*/

/*const myGame = {
    'game1' : 'NSF',
    'game2' : 'Spiderman'
}
for (const [key, value] of myGame) {
    console.log(key, ':-', value);
}
//Error : myGame is not iterable. object cant't work in forof
*/


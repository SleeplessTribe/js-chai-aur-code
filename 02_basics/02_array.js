const marvelHeroes = ['iron-man','thor', 'blackpanther']
const dcHeroes = ['batman', 'superman', 'flash']

//console.log(marvelHeroes); //[ 'iron-man', 'thor', 'blackpanther' ]
//console.log(dcHeroes); //['batman', 'superman', 'flash']

//marvelHeroes.push(dcHeroes);
//console.log(marvelHeroes); //['iron-man','thor','blackpanther',[ 'batman', 'superman', 'flash' ]]

//marvelHeroes.concat(dcHeroes)
//console.log(marvelHeroes); //['iron-man','thor', 'blackpanther']
//const allHeroes = marvelHeroes.concat(dcHeroes);
//console.log(allHeroes); //[ 'iron-man', 'thor', 'blackpanther', 'batman', 'superman', 'flash' ]

//... -> Spread operator
//const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeroes); //[ 'iron-man', 'thor', 'blackpanther', 'batman', 'superman', 'flash' ]

const anotherArray = [1, 2, 3, [4, 5 , 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity);
//console.log(realAnotherArray) //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



//console.log(Array.isArray('rashmikant')) //false
//console.log(Array.from('rashmikant')) //[ 'r', 'a', 's', 'h', 'm', 'i', 'k', 'a', 'n', 't' ]
//console.log(Array.from({ name : 'rashmi'})) //[]
//console.log(Array.from([2, 3, 4], (x) => x + x)) //[ 4, 6, 8 ]

let score1 = 100
let score2 = 200
let score3 = 300
//console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ]

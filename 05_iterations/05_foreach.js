const coding = ["js", "ruby", "java","python", "cpp" ]

/*coding.forEach( function(item){
    console.log(item);
})*/

/*coding.forEach( (item) => {
    console.log(item);
})*/

/*function printMe(item){
    console.log(item);
}
coding.forEach(printMe) //pass reference printMe not execut printMe()
*/

/*
//Foreach not only contain item parameter it also contain index and array
coding.forEach((item, index, arr) =>{
    console.log(item, index, arr);
})
*/

const myCoding = [
    {
        languageName : "Javascript",
        languageFile : "js"
    },
    {
        languageName : "Java",
        languageFile : "java"
    },
    {
        languageName : "Python",
        languageFile : "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})
//Immediately Invoked Function Expression (IIFE)
/*
To execute function immediately.
To over come problem of global scope pollution
*/

//named iife
(function chai(){
//    console.log(`DB CONNECTED`)
})();

/*
()();
first parenthesis is define function defination
second parenthesis is execution of function
if there is two iife function then first function must end with ; (semicolon)
*/

/*
//unnamed iife
(() => {
    console.log(`DB CONNECTED`)
})();{ username: 'rashmi' }
*/

/*
(() => console.log(`DB CONNECTED`))();{ username: 'rashmi' }
*/

/*
((name) => {
    console.log(`DB CONNECTED ${name}`); //DB CONNECTED rashmi
})('rashmi')
*/
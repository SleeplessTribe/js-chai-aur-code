const singletonObject = new Object();
//console.log(singletonObject); //{}
const notSingletonObject = {};
//console.log(notSingletonObject); //{}

notSingletonObject.email = "rashmikant@mail.com"
notSingletonObject.id = '12345sdf'
notSingletonObject.city = "Navsari"
//console.log(notSingletonObject)//{ email: 'rashmikant@mail.com', id: '12345sdf', city: 'Navsari' }

const regularObject = {
    email : 'rashmikant@mail.com',
    fullname : {
        username : {
            firstname : 'rashmikant',
            lastname : 'rathod'
        }
    }
}
//console.log(regularObject.fullname.username.lastname)//rathod

const obj1 = {1:"a", 2 :"b"}
const obj2 = {3:"a", 4 :"b"}
const obj3 = {5:"a", 6 :"b"}
const obj4 = Object.assign({},obj1, obj2, obj3);
//Object.assign(target, source);
//console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj5 = {...obj1, ...obj2, ...obj3}
//console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//array of objects
const users = [
    { id : 1 , email : 'a@mail.com'},
    { id : 2 , email : 'b@mail.com'},
    { id : 3 , email : 'c@mail.com'},
    { id : 4 , email : 'd@mail.com'},
]
//console.log(users[2].email);//c@mail.com

//console.log(Object.keys(notSingletonObject)); //[ 'email', 'id', 'city' ] ->array
//console.log(Object.values(notSingletonObject)); //[ 'rashmikant@mail.com', '12345sdf', 'Navsari' ]
//console.log(Object.entries(notSingletonObject)); //[ [ 'email', 'rashmikant@mail.com' ], [ 'id', '12345sdf' ], [ 'city', 'Navsari' ] ]


//console.log(notSingletonObject.hasOwnProperty('city')); //true


//De-structuring
const course = {
    coursename : 'JS in hindi',
    price : "999",
    courseInstructor : "rashmi"
}

//course.courseInstructor

//console.log(course.courseInstructor); //rashmi
const {courseInstructor} =course
//console.log(courseInstructor); //rashmi
const {courseInstructor: instructor} =course
//console.log(instructor); //rashmi
 
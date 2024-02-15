/* 2 types of object declaration
        1. Literal  2. Constructor
        Lietral declaration doesnot create singleton.
        Constrictor declaration creates singleton.
*/

// const mySym = Symbol("key1")
// const jsUser = {
//     name: "Mobasshir",
//     age:"21",
//     [mySym]: "start",
//     location: "New Delhi",
//     email: "perweznj@gmail.com",
//     isLoggedIn: false
// }
// console.log(jsUser.email)
// console.lig(jsUser["email"])
// console.log(jsUser[mySym])


// jsUser.email = "hitesh@ggoohl.com",
// // Object.freeze(jsUser);
// jsUser.email = "mobadhh@gam.com",
// // console.log(jsUser)
// jsUser.greeting = function(){
//     console.log(`Hello JS user ${this.name}`)
// }
// console.log(jsUser.greeting())



/// ************************************************************
// singleton object
const tinderUser = new Object();
//non singleton object
const tUser = {};
// console.log(tinderUser);
// console.log(tUser);
tUser.id = "abc"
tUser.name = "Saik"
tUser.isLoggedIn = false

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj4 = Object.assign{obj1,obj2,obj3}   // NOt good practise

// const obj4 = Object.assign({},obj1,obj2,obj3) //Good practise

// const obj4 = {...obj1, ...obj2,...obj3}
// console.log(obj4)

// console.log(tUser)
// console.log(Object.keys(tUser))
// console.log(Object.values(tUser))
// console.log(Object.entries(tUser))

// console.log(tUser.hasOwnProperty('isLoggedIn'))


// *****************************************************
// Destructuring of Object

const course = {
    courseName: "JS in hindi",
    price: 999,
    courseInstructor : "Jayesh"
}

// so instead of courseInstructor
const {courseInstructor: faculty} = course
console.log(faculty)










/* 2 types of object declaration
        1. Literal  2. Constructor
        Lietral declaration doesnot create singleton.
        Constrictor declaration creates singleton.
*/
const mySym = Symbol("key1")

const jsUser = {
    name: "Mobasshir",
    age:"21",
    [mySym]: "start",
    location: "New Delhi",
    email: "perweznj@gmail.com",
    isLoggedIn: false
}
// console.log(jsUser.email)
// console.lig(jsUser["email"])
// console.log(jsUser[mySym])


jsUser.email = "hitesh@ggoohl.com",
// Object.freeze(jsUser);
jsUser.email = "mobadhh@gam.com",
// console.log(jsUser)
jsUser.greeting = function(){
    console.log(`Hello JS user ${this.name}`)
}
console.log(jsUser.greeting())



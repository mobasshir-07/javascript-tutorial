const user = {
    userName : "Mobasshir",
    price: 999,
    welcomeMessage: function(){
        console.log(`Welcome ${this.userName}!`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()

// *************** Important point to remember *************
// In node if you print "this" in global scope it will show empty object. to see run this command console.log(this)
//In browser if you print "this" in global scope it will show window.

// this keyword can't access member in functions
function chaii(){
    let userName = "kevin"
    console.log(this.userName)
}

// arrow function
const chai = () => {
    let userName = "kevin"
    console.log(this.userName)
} 
chai()


// Below three function are same

const addTwo1 = (num1, num2) => {
    return num1 + num2;
}

const addTwo2 = (num1,num2) => (num1 + num2)

const addTwo3 = (num1,num2) => num1 + num2
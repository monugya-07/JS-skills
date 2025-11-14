const user = {
    username : "Monugya",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`)        // ${this.username} is current context
        // console.log(this)                                          // in line 16 tried to execute and got {}, but here the output ( check )
        
    } 
}

user.welcomeMessage()            // Monugya, welcome to website
user.username = "MBC"            // Changing user name 
user.welcomeMessage()            // MBC, welcome to website

// console.log(this)             // {}   // Inside browser console window is object ( check this line )


function binary(){
    let username = "AWS"
    // console.log(this)            // printing 'this' inside a function ( check ) in node environment 
    console.log(this.username)      // undefined 
}

binary()


// const whizz = function (){
//     let username1 = "AWS"
//     console.log(this.username1)      // undefined 
// }

// whizz()         



// Arrow function -

const whizz = () => {
    let username1 = "AWS"
    console.log(this.username1)      // undefined
    console.log(this)                // {}
     
}

whizz()    


// Basically Arrow function is :
// () => {}

// const addNums = (num1, num2) => {                 // Here added 'addNums' variable and passed num1 and num2 as parameters 
//     return num1+num2
// }           



// Implicit return : here we don't have to use {} , and no need to write return

const addNum1 = (num1, num2) => (num1 + num2)    // When we use {} return is necessary, and if we use () then no need to use return

console.log(addNum1(3,4))



// return object 

// const addNums = (num1, num2) => { username3 : "Monugya"}    // output : undefined 
const addNums = (num1, num2) => ({ username3 : "Monugya"})     // correct way, need to wrap in ()

console.log(addNums(3,4))


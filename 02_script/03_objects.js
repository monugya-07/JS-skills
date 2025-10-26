// Singleton
// Object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Monugya",
    "full name" : "Monugya_Borchetia",
    "Hobby" : "coding_&_gaming",
    // mySym : "myKey1",
    [mySym] : "myKey1",
    age : 28,
    location : "Assam",
    email : "monugya@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])   // "full name", this key can be execute this way only 
console.log(JsUser.Hobby)
// console.log(JsUser.mySym)
// console.log(typeof(JsUser.mySym)) // output: string 

console.log(typeof(JsUser[mySym]))   // to get it as symbol, make this line ( mySym : "myKey1" ) as [mySym] : "myKey1", now check


JsUser.email = "monugya123bchetia@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "kukoshibo07ZG@gmail.com"
// console.log(JsUser)


JsUser.greeting = function () {
    console.log("Hello JS user")
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`)  //  reference for same object : use "this"
}

console.log(JsUser.greeting)       //  unfreeze the object and try, output : [Function (anonymous)] 
console.log(JsUser.greeting())     //  output : Hello JS user  undefined  
console.log(JsUser.greetingTwo())  //  output : Hello JS user, Monugya  undefined  

// Primitive data type

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)     // false because return value isn't same 

const bigNumber = 123456789987654321n  // represent n at the end to make it bigint



// Reference type ( Non primitive)

// Array, Objects, Functions, 


const heros = ["spiderman", "batman", "superman", "ironman"]

let myObj = {
    
    name: "Monugya",
    age : 28,
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(typeof myFunction)   // returns function but called object function 
console.log(typeof anotherId)
console.log(typeof heros)
console.log(typeof myObj)



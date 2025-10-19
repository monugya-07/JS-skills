///////////////////////////////// Conversion ///////////////////////////////////

// let score = 33

// let score = "33"

// let score = "33absdef"

// let score = null

// let score = undefined

// let score = true

let score = "Monugya"


console.log(typeof score)
console.log(typeof (score))


let valueInNmber = Number(score)

console.log(typeof valueInNmber)
console.log(valueInNmber)


// let isLoggedIn = 1

// let isLoggedIn = ""

let isLoggedIn = "Monugya"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)


let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)


/////////////////////////////////// Operations ////////////////////////////////////// 


let value = 3 
let negValue = -value
console.log(negValue)

// console.log(8+4)
// console.log(8-4)
// console.log(8*4)
// console.log(8**4)
// console.log(8/4)
// console.log(8%4)

let str1 = "Hello"
let str2 = " Monugya"

let str3 = str1 + str2
console.log(str3);


console.log("1" + 2)          // Real reason for this output : https://tc39.es/ecma262/#sec-abstract-operations --- check here 
console.log(1 + "2")          // Real reason for this output : https://tc39.es/ecma262/#sec-abstract-operations --- check here 

console.log("1" + 2 + 2)      // Real reason for this output : https://tc39.es/ecma262/#sec-abstract-operations --- check here 
console.log(1 + 2 + "2")      // Real reason for this output : https://tc39.es/ecma262/#sec-abstract-operations --- check here 


// Proper way to write the above codes -- Use brackets 

console.log(1 + (2+ "2"))  
console.log((1 + 2) + "2")

console.log(true)
console.log(+true)
console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2+2 



let gameCounter = 100

++gameCounter              // Prefix   check documentation  ---    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// gameCounter++              // Postfix  check documentation  ---    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

console.log(gameCounter)


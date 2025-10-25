const score = 400
console.log(score)


const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log(balance.toFixed(1))


// const otherNumber = 23.8966
// const otherNumber = 123.8966
const otherNumber = 1232535.8966

console.log(otherNumber.toPrecision(3))


const hundreds = 1000000
console.log(hundreds.toLocaleString())  // It'll show in US standards 
console.log(hundreds.toLocaleString("en-IN"))  // It'll show in IN standards 


// go to console and check "Number" functions


// ---------------------------- Maths ---------------------------- 

console.log(Math)   // terminal output is "Object [Math] {}"  Check this on console for details 

console.log(Math.abs(-4))
console.log(Math.abs(4))
console.log(Math.round(4.3))
console.log(Math.round(4.7))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.8))
console.log(Math.min(4, 3, 6, 8))
console.log(Math.max(4, 3, 6, 8))

console.log(Math.random())   // Gives value from 0 to 1 
console.log(Math.random()*10) 

// Sometimes we get numbers like 0.0004145 this, If we use "floor" the number will become 0, To avoid this we add 1

console.log((Math.random()*10) + 1 ) 
console.log(Math.floor(random()*10) + 1 ) 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min) 


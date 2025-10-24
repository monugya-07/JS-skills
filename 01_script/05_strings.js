const name = "Monugya "
const repoCount = 10

// console.log(name + repoCount)
// console.log(name + repoCount + " 28 years old ")

// modern way : Also called string interpolation
console.log(`Hello my name is${name} and my repo count is${repoCount} and I'm 28 years old`)

// const gameName = new String("MonugyaItachi")
const gameName = new String("Monugya-Itachi-GG")


console.log(gameName[0])
console.log(gameName.__proto__)    // {}

console.log(gameName.length)
console.log(gameName.toUpperCase())   // MONUGYAITACHI but original value doesn't change 
console.log(gameName.charAt(2))
console.log(gameName.indexOf('g'))

const newString = gameName.substring(0, 7)  // substring cannot be start from -ve 
console.log(newString)

const anotherString = gameName.slice(-13, 7) 
console.log(anotherString) 

const newStringOne = "   Monugya   "
console.log(newStringOne.trim())

const url = "https://monugya.com/monugya%20borchetia"
console.log(url.replace("%20", "-"))
console.log(url.includes("monugya"))
console.log(url.includes("local"))
console.log(gameName.split("-"))

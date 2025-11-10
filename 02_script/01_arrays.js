// array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0])

const heros = ["spiderman", "batman", "superman", "ironman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1])
console.log(myArr2[1])


// Inside console : 

// const numbers = [ 1,2,3,4 ]
// undefined
// numbers
// (4) [1, 2, 3, 4] 0: 11: 22: 33: 4length: 4
// [[Prototype]]: Array(0)at: ƒ at()length: 1name: "at"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object


// Methods of Arrays 

myArr.push(6)
myArr.push(7)
myArr.pop()        // Removes the last value 

myArr.unshift(9)   // Adds value at first position 
myArr.shift()      // It removes the first positioned value 

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))   // Output is -1 means "Not available" 

console.log(myArr.indexOf(3))   // Now it shows "3"

const newArr = myArr.join()

console.log(myArr)
console.log(newArr)   // Check in the terminal -- Values are same but what it changes is the "type"

console.log(typeof(newArr))
console.log(typeof newArr) // Also can be written like this 


// slice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)   // Almost same as copy, output : [1,2]

console.log(myn1)                // [ 1, 2 ]
console.log("B", myArr)          // B [0, 1, 2, 3,4, 5, 6]


const myn2 = myArr.splice(1,3)   // Almost same as move

console.log(myn2)                // [1,2,3]
console.log("C", myArr)          // C [ 0, 4, 5, 6 ]


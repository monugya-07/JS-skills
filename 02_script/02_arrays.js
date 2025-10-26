const marvel_heros = ["spiderman", "captain_america", "hulk", "ironman"]
const dc_heros = ["superman", "batman","flash", "harley_Quinn"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)   // Array inside array : ['spiderman','captain_america','hulk','ironman',[ 'superman', 'batman', 'flash', 'harley_Quinn' ]]
// console.log(marvel_heros[3][1])
// console.log(marvel_heros[4][1])

// marvel_heros.concat(dc_heros) 
// console.log(marvel_heros)   // This code gives same marvel_heros values 

// Need to assign a variable to concatinate as shown below 

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

// push works on the same array but concate gives a new array


// spread :

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)    // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray("Monugya"))  // Asking is this array available or not , output is false ( a boolean value )

console.log(Array.from("Monugya"))     // [ 'M', 'o', 'n', 'u', 'g', 'y', 'a' ]

console.log(Array.from({name: "Monugya"}))  // output empty array, directly cannot be converted, we need to specify what do we want to convert into array, key or value. Will be discussed about it later briefly

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

// Dates

let myDates = new Date()

console.log(myDates)   // 2025-10-25T07:11:09.427Z

console.log(myDates.toString())
console.log(myDates.toLocaleString())

console.log(typeof myDates)

// let myCreatedDate = new Date(2025, 0, 23)
// let myCreatedDate = new Date("2025-10-25")   // Format : "yy-mm-dd"
let myCreatedDate = new Date("2025-10-25") 

console.log(myCreatedDate)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)     // Output is in mili-second 
console.log(myCreatedDate.getTime()) 
console.log(Date.now)
console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default', {   //inside toLocaleString we define object, we can define a lot of parameters 
    weekday: "long",
    // weekday: 'short'
    // timeZone: ''
})

// ctrl+space : inside toLocaleString all the properties will be mentioned 


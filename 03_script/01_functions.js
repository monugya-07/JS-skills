
function myName(){                                          // {} is function definition 
    console.log("M")
    console.log("o")
    console.log("n")
    console.log("u")
    console.log("g")
    console.log("y")
    console.log("a")
}

myName()                  // function call 



function addTwoNumbers(number1, number2){            // number1, number2 are called parameters 
    console.log(number1 + number2 )
}


function addTwoNumbers(number1, number2){            
     
    // let result = number1 + number2
    // return result
    // console.log('Monugya')         // After return it won't print anything 

    return number1 + number2 
}

// addTwoNumbers()            // NaN
addTwoNumbers(3, 4)           // adding arguments , output : 7
addTwoNumbers(3, '4')         // 34  ( string )
addTwoNumbers(3, null)        // 3 

const result = addTwoNumbers(3, 5)    // 8

// console.log("result: ", result);      // undefined 

// function logInUserMessage(username){
//     return `${username} just logged in`
// }

// // logInUserMessage("Monugya")            // No output
// console.log(logInUserMessage("Monugya"))  // Asked to print : Monugya
// console.log(logInUserMessage())           // undefined just logged in



// Another code :

// function logInUserMessage(username){
//     if (username === undefined){                  // If we type : if username(undefined) , here undefined = false, to make it right we type like this: if(!username) 
//         console.log("Enter a username: ")
//         return
//     }
//     return `${username} just logged in`
// }

// // logInUserMessage("Monugya")            // No output
// console.log(logInUserMessage("Monugya"))  // Asked to print : Monugya
// console.log(logInUserMessage())           // undefined just logged in


function logInUserMessage(username = "Monugya"){
    if (username === undefined){                  // If we type : if username(undefined) , here undefined = false, to make it right we type like this: if(!username) 
        console.log("Enter a username: ")
        return
    }
    return `${username} just logged in`
}

// logInUserMessage("Monugya")            // No output
console.log(logInUserMessage("Monugya"))  // Asked to print : Monugya
console.log(logInUserMessage())           // Check it won't pass anything  
console.log(logInUserMessage("MBC"))      // Overwrite by MBC


function calculatecartPrice(num1) {
    return num1
}

// console.log(calculatecartPrice(200))


function calculatecartPrice(...num1) {                  // three ... 
    return num1
}

console.log(calculatecartPrice(200, 400, 500))


function calculateCartPrice(val1, val2, ...num1) {                 
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))    // [ 500, 2000 ], 200 and 400 went inside val1 and val2


const user = {
    username1: "Monugya",
    price: 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username1} and price is ${anyobject.price}`) 
    
}

handleObject(user)

// also , passing direct object 

// handleObject({
//     username : "Sam",
//     price : 399
// })

// also , passing array 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))


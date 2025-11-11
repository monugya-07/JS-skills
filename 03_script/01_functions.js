
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



// function addTwoNumbers(number1, number2){            // number1, number2 are called parameters 
//     console.log(number1 + number2 )
// }


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
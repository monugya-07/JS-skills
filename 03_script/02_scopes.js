// Scopes

if (true) {
    let a = 10
    const b = 20
    var c = 30    
}

// console.log(a)   // Won't be printed 
// console.log(b)   // Won't be printed
console.log(c)      // 30, people avoids var because of creating problems 



var c = 300              // Global scope

if (true) {              
    let a = 10
    const b = 20
    var c = 30           // { var c = 30 }, block scope 
}

console.log(c)      // 30 



let a = 300

if (true) {

    let a = 10
    const b = 20
    console.log("Inner:", a)

}

console.log(a)


// Note : global scope in inspect --- console --- and global scope in code terminal --- both are different 



// Nested scope

function one(){
    const username = "Monugya"

    function two(){
        const website = "Youtube"
        console.log(username)
    }

    // console.log(website)          //Error

    two()
    
}

one()


if (true) {
    const username = "Monugya"
    if (username === "Monugya") {
        const website = "Youtube"
        console.log(username + website)
    }
    console.log(website)        // Error
    
}

console.log(username)           // Error



// -------------------------------------- Interesting ------------------------------------ 

function addOne(num){
    return num + 1
}

addOne(5)


// const addTwo = function(num){
//     return num + 2 
// }

// addTwo(5)


// Now try this 


console.log(addOne(5))         // 6 , Will be discussed later 

function addOne(num){
    return num + 1
}



addTwo(5)                      // Error , Will be discussed later 

const addTwo = function(num){
    return num + 2 
}


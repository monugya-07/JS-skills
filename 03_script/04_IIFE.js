// Immediately Invoked Function Expressions ( IIFE ) 


function binary(){                 // called 'named IIFE', function has a name 
    console.log("DB Connected")
    
}

binary()

(function binary(){
    console.log("DB Connected")
    
})()                            // Here, first () -> function definition, second () -> execution call  

// Global scope create problems sometime, to remove the polution of variables, declarations in the global scope 


// Structure : ()() 

( () => { 
    console.log('DB Connected TWO') 
} )() 


// Try both points together
// // Point 1                          // Error
(function binary(){
    console.log("DB Connected")
    
})() 

// // Point 2                          // Error 
(function binary(){
    console.log("DB Connected")
    
})() 

// In the above case, function got invoked but doesn't know which context to stop, that's why need to end the functions with -> ' ; '

// Now check 
// Point 1                          // Error
(function binary(){
    console.log("DB Connected")
    
})();                               // End line here 

// Point 2                          // Error 
(function binary(){
    console.log("DB Connected")
    
})() 

// Now check with the arrow function 

(function binary(){
    console.log("DB Connected")
    
})();

( () => { 
    console.log('DB Connected TWO') 
} )() 


// Passing argument, parameters

( (name) => {                               // simple IIFE or unnamed IIFE, function has no name 
    console.log(`DB Connected TWO ${name}`) 
} )("Monugya")

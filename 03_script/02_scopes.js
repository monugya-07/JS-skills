// // Scopes

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30    
// }

// // console.log(a)   // Won't be printed 
// // console.log(b)   // Won't be printed
// console.log(c)      // 30, people avoids var because of creating problems 



// var c = 300              // Global scope

// if (true) {              
//     let a = 10
//     const b = 20
//     var c = 30           // { var c = 30 }, block scope 
// }

// console.log(c)      // 30 




let a = 300

if (true) {

    let a = 10
    const b = 20
    console.log("Inner:", a)

}

console.log(a)



// Note : global scope in inspect --- console --- and global scope in code terminal --- both are different 
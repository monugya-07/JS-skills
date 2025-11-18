// Javascript Execution Context 

// {} , Global Execution Context 


// Function Execution Context , Global Execution Context , Eval Execution Context 

// {} ----> Memory creation phase or creation phase 
//    ----> Execution phase or Memory phase

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2 
    // console.log(total)
    return total 
}
let resutlt1 = addNum(val1 + val2)
let resutlt2 = addNum(10, 2)

// Memory phase :     line 1 ----> val1 = undefined
//                    line 2 ----> val2 = undefined 
// Execution phase :  line 3 ----> addNum -> definition -> New variable environment + Execution thread 
//                    line 4 ----> result1 = undefined
//                    line 5 ----> result2 = undefined

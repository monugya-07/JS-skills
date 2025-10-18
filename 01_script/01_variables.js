const account_Id = 144553
let account_Email = "monugyaborchetia1@gmail.com"
var account_Password = "12345"
account_City = "Guwahati"
let account_State

// account_Id = 2  // Not allowed by NodeJS because account_id is const.

console.log(account_Id);

account_Email = "mbc@gmail.com"
account_Password = "2121212121"
account_City = "Bangalore"


/*
Prefer not to use "var" because of issue in block scope and functional scope 
 */

console.table([account_Id,account_Email, account_Password, account_City, account_State]) 


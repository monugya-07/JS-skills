// const instaUser = new Object
const instaUser = {}

instaUser.id = "___obito___"
instaUser.name = "mbc"
instaUser.isLoggedIn = false

console.log(instaUser)


const fbUser = {
    email: "mbc@google.com",
    fullName : {
        userFullName: {
            firstlName : "Monugya",
            lastName : "Borchetia"
        }  
    }
}

console.log(fbUser)
console.log(fbUser.fullName)
console.log(fbUser.fullName.userFullName.firstlName)
// console.log(fbUser.fullName.userFullName?.firstlName)  // "?"" this will be discussed later, simply, what if the key "userFullName" doesn't exist. Then it's used 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = { obj1, obj2 }
console.log(obj4) 

const obj5 = Object.assign(obj1,obj2)
console.log(obj5)

const obj6 = {...obj1, ...obj2}
console.log(obj6)

const users = [
    {
        id: 1,
        email:"user1@gmail.com"
    },
    {
        id: 2,
        email:"user2@gmail.com"
    },
    {
        id: 3,
        email:"user3@gmail.com"
    },
    {
        id: 4,
        email:"user4@gmail.com"
    },
    {
        id: 5,
        email:"user5@gmail.com"
    },
    {
        id: 6,
        email:"user6@gmail.com"
    }
]

users[1].email   // Accessing the 1st value, using as [1] beacuse "user" is an array, after using " . " because email is a key of an object 


// Extracting into Arrays, ( where we can use loop in these arrays later on ) 

console.log(Object.keys(instaUser))     // [ 'id', 'name', 'isLoggedIn' ] , extracting keys 
console.log(Object.values(instaUser))   // [ '___obito___', 'mbc', false ] , extracting values
console.log(Object.entries(instaUser))  // [ [ 'id', '___obito___' ], [ 'name', 'mbc' ], [ 'isLoggedIn', false ] ] , extracting each key:value individually

console.log(instaUser.hasOwnProperty("isLoggedIn"))  // true
console.log(instaUser.hasOwnProperty("isLogged"))    // false



// De-structuring 

const course = {
    courseName : "JavaScript",
    price : "999",
    instructor : "John Doe"
}

// course.instructor

// const {instructor} = course

// console.log(instructor)


const {instructor : n} = course    // Assigning instructor as 'n', can be assigned like this if the name is big 

console.log(n)


// Concept of API

// {
//     "name" : "monugya",      
//     "courseName" : "js",     // API calls come like this, It's JSON file, an object without name, here keys are also string 
//     "price" : "free" 
// } 


// Sometimes APIs come in array format also where there are objects exist 

[
    {},
    {},
    {}
]


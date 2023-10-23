//object

//const tinderUser = new object -->singlrton obj

//below is non singleton

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "chandan",
            lastname: "kumar",
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


//In above code we make nested object and access the lement using . method!

//Apart from this we have optional chaining discuss in further!

// some other technique

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}


// const obj3 = {obj1, obj2} //here it is same like array object inside obj.

// so we do it different way.

//const obj3 = Object.assign(obj1,obj2)
// in this technique the target is obj1 because both the obj are assign in obj1


//const obj3 = Object.assign({},obj1, obj2)
//But in this case {} this is a target obj which is empty both are assign in this target obj try to wrte like this this is good way.

// both has same result

// but 90% we are going to use spread operator

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


//When value came from database we are going to use this below syntax

const user = [{
    id: 1,
    email: "develop@gmail.com",
},
{
    id: 1,
    email: "develop@gmail_1.com",
},
{
    id: 1,
    email: "develop@gmail_2.com",
},
]

// console.log(user[1].email) O/P=develop@gmail_1.com

/*vary important concept*/
// when we want to loop over key or value in object.

console.log(regularUser);

console.log(Object.keys(tinderUser));

//Returns the names of the enumerable string properties and methods of an object.


console.log(Object.values(tinderUser));

// Returns an array of values  of the enumerable properties of an object

console.log(Object.entries(tinderUser));

//Returns an array of key/values of the enumerable properties of an object 
// it return every key pair value inside array and all the array is store in single array.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// it check the value we pass if exist in obj then return true otherwise false.
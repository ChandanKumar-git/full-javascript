//Types of datatypes
//1.Primitive 

//7 types of Primitive data
//String, Number, Boolean, null(empty, not 0 and empty string), undefined, Symbol, BigInt.


// JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes and classes.

const score=100
const scoreValue=100.5

const isLogedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId);

const bigNumber= 1223676489087n


//2.Reference Type (non-primitive).

//Array, Objects, Functions

const hero = ["saktiman", "naagraj", "doga"]
 let myObj = {
    name: "Chandan",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World")
}

console.log(typeof anotherId)
console.log(typeof myFunction) //type is function Object but show only function

//Link for guide: https://262.ecma-international.org/5.1/

/****************Stack and heap memory**********/

//Stack: stack are used in all types of primitive datatype, wheneever use stack memory we got copy of decleard variable.

//Heap: heap are used in all non-primitivw datatypes , whenever we use heaap we got original reference of decleared variable.

let myId="chandankumardubey"

let anothername=myId

anothername="Hiteshchaudhry"

// console.log(myId);
// console.log(anothername);
//   only copy dould be changed original is as it is. it will store in stack

//obj
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "chandan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//these are useing heap memory that's why original got changed.
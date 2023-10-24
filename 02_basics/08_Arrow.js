//this keyword

const user = {
    username: "chandan",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`);
        // console.log(this);
    }

}
//this means current context we can access all the value in side above using this.valuename  

// user.welcomeMessage()
// user.username = "sam"  //sam,welcome to website
                        //this will change after username =sam output of 
                            //inner this .
// user.welcomeMessage()

// console.log(this); 

// it will give current context is empty {} , because we are in node env bcz there is no context in global env.


//But in browser console it gives window object!


// function one() {
//     console.log(this);
// } 
// one()
//here this will return lots of thing.

function two (){
    let username = "kumar"
    console.log(this.username);
}
// two()

///it return undefine here we are not able to use this becaause this work's in object.

// const three=function  (){
//     let username = "kumar"
//     console.log(this.username);
// }
// three()

//it will return same undefined bcz it is also afunction.

const chai = () => {
    let username = "kumar"
    console.log(this.username);
}
// chai()

// here also in arrow function we get undefined


//+++++++++++++++++++++++Arrow Function+++++++++++++/////

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
//basic arrow function


// const addTwo = (num1, num2) => num1+num2 
//this is called implicit Arrow function

const addTwo = (num1, num2) => (num1+num2) //when we use paranthesis need not use return statement, but when we use {} this then return statement is require.

const addTwo1 = (num1, num2) => ({username: "Dubey"}) // this type we pass the object in arrow function ({}).

console.log(addTwo1());
console.log(addTwo(4,7));

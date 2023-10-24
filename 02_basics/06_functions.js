//function

function sayMyname() {
console.log("C");
console.log("H");
console.log("A");
console.log("N");
console.log("D");
console.log("A");
console.log("N");
}
// sayMyname();

function addTwoNumbers(num1, num2) /*here num1 and num2 is called function parameter*/{
    console.log(num1+num2);
}

// addTwoNumbers(3,4);//7 //here 3 and four are argument 
// addTwoNumbers(3,"4");//34
// addTwoNumbers(3,"a");//3a
// addTwoNumbers(3,null);//3
// here we write a simple function without any condition that's why result are vary in there type bcz JS convert it accordingly.

////////////////////////////////

// function addTwoNumbers_1(num1, num2)
// {
//     console.log(num1+num2);
// }

// const result = addTwoNumbers_1(3,5)


// console.log("Result: ",result);//Result:  undefined because we just do console.log in function nothing to return .

//////////////////////////////////

function addTwoNumbers_1(num1, num2)
{
    let result = num1+num2;
    return result
    //after return nothing will proceed further.
    console.log("chandan");
}

const result = addTwoNumbers_1(3,5)


// console.log("Result: ",result);
//here we store and then return so Result: 8

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("chandan"));

// console.log(loginUserMessage());
//o/p is undefined just logged in

//////////////////////////////

function loginUserMessage(username) {
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

// function calculateCartPrice (...num1) {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500))

//output=[ 200, 400, 500 ] this return because of rest operator (...parameter) in function we use rest operator it meanse bind all the rest of element in a single array and return this array.

function calculateCartPrice (val1, val2,...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500,2000));

//output =[ 500, 2000 ] because val1 taakes first element and val2 second ele and rest of the in array.

/**##Pass object in function ####*/

const user  ={
    username: "chandan",
    price: 99
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user); in this first we define object and then pass as argumenet.

// handleObject ({
//     username: "sammy",
//     price: 599
// }) 

//but in this case we directly passs an object at run time.

/**Pass arrays in function */

const myNewArray = [100, 200, 300, 400];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500]));

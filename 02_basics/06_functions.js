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

console.log(loginUserMessage());




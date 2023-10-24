//scope

// let a= 300  //this is globale scope 

// if(true) {
//     let a = 10  //this is block scope it will run inside the block scope
//     const b = 20
//     var c = 30
//     console.log("INNER: ", a);
// }





//  console.log(a); 
// console.log(b);
//console.log(c);


//*** In browser console global scope is different and node invronment global scope are differnt*/

////////Nested scope////////////

function one() {
    const username = "chandan"

    function two() {
        const website = "youtub"
        // console.log(username);
    }
    // console.log(website);
                                              // this can't be happen because outer most 
                                             // scope/block cannot allow to access inner most scope/block element, 
                                             // and vise-versa is possible.
    two()
}

// one()



/////////////////////////////////////

if(true) {
    const username = "chandan"
    if(username==="chandan") {
        const website = " youtube"
        // console.log(username + website);
    }

//the above almost like clouser.

    // console.log(website); 
    
                                      //ReferenceError: website is not defined
}

// console.log(username); 
//ReferenceError: username is not defined



///++++++++++++++++Interesting++++++++++++++++////

// function addone(num) {
//     return num +1
// }

// addone(5) 

// const addTwo = function (num) {
//     return num +2
// }

// addTwo(5)  

// at that point of time the both work same some time second one is called expression where variable hold a function

console.log(addone(5));
function addone(num) {
    return num +1
}

// In this case above function is working fine not any issue

 console.log(addTwo(5)); //this is knon as hoisting.
const addTwo = function (num) {
    return num +2
}

  //but this will give -->ReferenceError: Cannot access 'addTwo' before initialization

  
//Immediately Invoked Function Expression (IIFE)

// function chai () {
//     console.log(`DB CONNECTED`);
// }
// chai()

//Here immediately function is invoked but some time our function is pollute from global scope.
//for sttoping global pollute we write IIFE.

// (function chai () {
//     console.log(`DB CONNECTED`);
// })();

//()(); the first paranthesis is for function definition and second is for call that fun and one more thing because of IIFE the js don;t know where to stop code we use semicolon at the end.

//for ex:

// (function chai () {
//     console.log(`DB CONNECTED`);
// })()

// (function aurcode (){
//     console.log(`DB CONNECTED TWO`);
// })()

// it will give TypeError: (intermediate value)(...) is not a function.

// But after using semicolon it will run perfect

(function chai () {  // this is known as named IIFE
    console.log(`DB CONNECTED`);
})();

// (function aurcode (){
//     console.log(`DB CONNECTED TWO`);
// })();

( () => { //this is simle IIFE
    console.log(`DB CONNECTED TWO`);
})();

( (name) => { //this is parameter IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("chandan");
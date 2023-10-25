//for of loop

// ["", "",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const iterator of object) {
    
// }

// 'iterator' is declared but its value is never read.

//'object'means any spwcified value either obj or array ar any.

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps : it is for unique value and also it manage order

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);
/**For of on map */


// for (const key of map) {
//     console.log(key);
// }
// output=[ 'IN', 'India' ]
// [ 'USA', 'United State of America' ]
// [ 'Fr', 'France' ]

//if we want value without array we use de-structure

for (const [key, value] of map){
    // console.log(key, ':-', value);
}

// output= IN :- India
// USA :- United State of America
// Fr :- France

/**For of loop on obj */

// const myObj ={
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }
// //TypeError: myObj is not iterable

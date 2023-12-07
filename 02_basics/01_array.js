//Array
const myArray = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]

const myArray2 = new Array(1,2,3,4)

// console.log(myArray[1]);
// console.log(myHeros[1]);

//Array method

// myArray.push(6); // push method push the element at the end of the array!
// myArray.push(7);
// myArray.pop();//pop method remove the element from end!

myArray.unshift(9);// it push the element at the start of the array 

myArray.shift(); //it remove the element from start of aray

// console.log(myArray.includes(2)); // this method tells the value is exist or not and return value is boolean type.

// console.log(myArray.indexOf(3)); //this method tells the element at that index.

const newArr = myArray.join()

//.join method is bind the array and convert it into string.

// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);

//console.log(myArray);

/********slice, splice******* */

// difference between sclice and splice!

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);
console.log(myn1);

//In .sclice(start, end) method start index is include and end index is exclude and the original array is not change after sclicing.

console.log("B", myArray);

const myn2 = myArray.splice(1, 3)
console.log(myn2);
console.log("C ", myArray);

//In .splice(start, end) method start and end both index are included and the original array is changed after splicing. for ex: A  [ 0, 1, 2, 3, 4, 5 ]
//A.splice(1,3); // o/p=[ 1, 2, 3 ], and now A=[ 0, 4, 5 ].


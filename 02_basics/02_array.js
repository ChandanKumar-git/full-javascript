const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);// it push array in side the array it return in existing array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

//output 1=[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//o/p 2= batman

/**concat */
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// console.log(allHeros[3][1]);

// but generaly use spread operator(...)!

//it spread the element from array and combine them together as singlr array.

const all_new_heros = [...marvel_heros, ...dc_heros];


// console.log(all_new_heros);

/**flat operator */

//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//preferable is try to specify depth here i use infinity 

// basically when multiple arroy inside array then flat is good catch.

const another_Arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_Arr.flat(Infinity)
// console.log(real_another_arr);

console.log(Array.isArray("Chandan")) //at that time it is not an array so output is false.

console.log(Array.from("Chandan")); // now it convert in an array.

console.log(Array.from({name: "Chandan"}))
// This is interesting caase here it will return empty array , here we have to particularly tell's about which should become array either key or value then it return array on that bacis. 

//Instead of Array.from we can use Array.of also.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

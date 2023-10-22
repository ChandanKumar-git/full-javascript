// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2===1);
// console.log(2!==1);

console.log("2">1);// true because js cinvert 2 in number
console.log("02">1); //same thats' the problem because here datatypes of both element is different, typescript is not allowed 
console.log(null>1);
console.log(null==0);
console.log(null>=0);


//The reason is that an equality check==and comparisions >,<,>=,<= work differently
// comparision convert null to a number, treating it as 0, that's why null>=0 is true and null>0 is false!

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);
//it gives false with all of them

// mostly we avoid these type of convedrsion in most of the cases

//we use stricct comparision using ===,>==,<== and all.

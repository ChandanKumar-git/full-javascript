const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => num+10 )
// console.log(newNums);

// const newNums = myNums.map( (num) => {return nu+10 })
// console.log(newNums);


/********Chaining******** */
 // multiple methode apply together 
// for example: const newNums = myNums.map().map().filter()  


const newNums = myNums
               .map( (num) => num*10)
               .map( (num) => num+1)
               .filter((num) => num>=40)

console.log(newNums);
 
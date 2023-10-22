//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);//object type

// let myCreatDate = new Date(2023, 5, 10)
let myCreatDate1 = new Date(2023, 5, 10, 6 ,3)

let myCreatDate2 = new Date("2023-03-21");
// console.log(myCreatDate2);

// let myCreatDate2 = new Date("03-21-2023");

// console.log(myCreatDate2.toLocaleString());

// console.log(myCreatDate2.toDateString());

let mytimeStamp = Date.now()

// console.log(mytimeStamp);//it gives time in millisecond

// console.log(myCreatDate2.getTime());//it also gives in milli second
// always compare in milli second

console.log(Date.now());

console.log(Date.now()/1000); //basically it convert in milli second to second but give some decimal value so use Math.floor or Math.roundof.

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long", 

})

//ctrl+space and get all the mathod



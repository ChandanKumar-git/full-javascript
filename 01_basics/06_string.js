const name = "Chandan-ck"
const repocount = 50


//console.log(name+repocount + " value"); old fassion

//preferable usin backtic (``)

console.log(`Hello my name is ${name} and my rep count is ${repocount}`);

const gamename = new String('Chandan') //it create object not array key: value if you want to se run this on browser console. 

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.toUpperCase());// but original string not change bcz it usases stack

console.log(gamename.charAt(2)); //here we pass index and get character of that index.

console.log(gamename.indexOf('a')); // here we pass character and get position.

const newString = gamename.substring(0, 4); //substring(start, end) start is included and end is excluded. it not use negative value
console.log(newString);

const anotherString= gamename.slice(-9, 3);
console.log(anotherString);//herev negative value is work in reverse direction it works

const newStringOne = "   Chandan   "
console.log(newStringOne);
console.log(newStringOne.trim());// trim is remove the starting space and eend space .

const url = "https://chandan.com/chandan%20dubey"

console.log(url.replace('%20','_'));//replace (first what to replace , second which to replace) here we replace the .

console.log(url.includes('chandan')); // we ask this word is exist or not 

console.log(gamename.split('-')); //split seperate on basis of what you want here I separete on - and it return  in array formate.




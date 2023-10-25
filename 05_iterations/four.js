//For in loop

const myObj = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

// for (const key in myObj) {
//     console.log(key);        // here we can use any variable on the place of key.
// }
//it will return all the key

// for (const key in myObj) {
//     console.log(myObj[key]);
// }
// it return all the values

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}


//for in in array

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming) {
    // console.log(key);
}
//it will return key of array element ye we have key in araay which start from 0 and by default num.

for(const key in programming) {
    // console.log(programming[key]);
}
//it will return value of array.


/****** for in loop in map **********/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//    console.log(key);
// }

//we will not apply for in loop on map because map is not itetrable.
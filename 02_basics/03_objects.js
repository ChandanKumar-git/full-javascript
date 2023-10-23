//singleton: whenever we declear through cunstructor it will become singleton

// eg: object.creat()

//But when we define using literal it will never be singleton.

//object literals

//all the key vhalue is actually stored in string formate behind thhe scene.

// const Jsuser = {
//     name: "chandan",
//     "full name": "chandan Kumar Dubey",
//     age: 18,
//     location: "Delhi",
//     email: "chandan@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(Jsuser.email); //mostly we are going to use this method for accessing the object
// console.log(Jsuser["email"]); //But in some case we also using this on the basis of demand.

// console.log(Jsuser.full name); it will give error. this is not allowed

// console.log(Jsuser["full name"]); // this is correct way to define 

/**Symbol */
//How to use symbol in object without changing their type

 const mySym  =Symbol("key1")

const Jsuser = {
        name: "chandan",
        "full name": "chandan Kumar Dubey",
       // mySym : "mykey1", /* dont use like that it give the right ans but the type of mySym is change Symbol to string*/

        [mySym]: "mykey1", // this is write way of writing symbol in object here the type of mySym is no change it remain same Symbol type.
        age: 18,
        location: "Delhi",
        email: "chandan@google.com",
        isLoggedIn: false,
        lastLoginDays: ["Monday", "Saturday"]
    }

    //console.log(Jsuser[mySym]);

    //here we change the value using
    Jsuser.email = "chandankumar@gmail.com"

    // we can freez the object using

   //Object.freeze(Jsuser)
    Jsuser.email = "developer@gmail.com"
    // console.log(Jsuser);

    // here it is not showing any error but it return whole  object and there is not any changes happeen because we freezed this object.

    // console.log(Jsuser["email"]);


    /**Function with OBJ */

    // Apart from these also we use function in object

    Jsuser.greeting = function() {
        console.log("Hello JS User");
    }

    Jsuser.greetingTo = function() {
        console.log(`Hello JS User, ${this.name}`);
         //here we access the reference of value using this method.
    }

    // console.log(Jsuser.greeting);//when we call method it gives [Function (anonymous)]
    console.log(Jsuser.greeting());//but when we call function it gives whatever you pass the simle or rerference

    console.log(Jsuser.greetingTo());
    


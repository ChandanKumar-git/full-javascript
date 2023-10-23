/**Object destructuring */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor
//this method is destructuring but generaly not use the below are the good way to destructure an obj.

const {courseInstructor: instructor} = course
//destructuring method

console.log(instructor);

//like in react it oftenly this destructure method

// const navbar = ({company}) => {

// }
// navbar(company = "chandan");
//this way we write in react basically we destruct the obj.

/*****Basics of API******/

// API stands for "application programming interface". It's a collection of communication protocols and subroutines that allow software programs to communicate with each other. APIs are a type of software interface that offer services to other software.

//these are some JSON API formate

// {
//     "name": "chandan",
//     "coursename":"js in hindi",
//     "price":"free"

// }

// [
//     {},
//     {},
//     {}
// ]
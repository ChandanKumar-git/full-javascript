//this keyword

const user = {
    username: "chandan",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`);
    }

}
//this means current context we can access all the value in side above using this.valuename  

user.welcomeMessage()

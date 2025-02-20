/*
// ! object literal
const user = {
  userName: "Ankit",
  id: 2,
  signIn: true,

  getUserDetail: function() {
    // console.log(user)̥;̥
    console.log(this.userName)
  }
};

// console.log(user);
// console.log(user.userName)
console.log(user.getUserDetail() );
*/

function User(userName, loggedInCount) {
  this.userName = userName;

  this.loggedInCount = loggedInCount;

  this.greeting = () => {
    console.log(
      `Hello ${this.userName} you have logged in ${this.loggedInCount} times`
    );
  };
  // it does not
  // return this;
}

// ? new keyword basically given us a new copy of the object. If we does not use new keyword it override the values.
// ! step-1 when we use new keyword new object is created
// ! step-2 When we use new keyword new constructor function is also created that pass all the arguments inside it.
// ! step-3 this keyword injected all the arguments inside it..
const userOne = new User("Ankit", 12);
const userTwo = new User("Rahul", 1);
console.log(userOne.constructor);

// ! Read the instanceOf docs...........
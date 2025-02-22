 class User {
  constructor(userName, email) {
    this.name = userName;
    this.email = email;
  }

  


  get email() {
    return `${this._email}ankit`;
  }


  // here problem is constructor is also calling setter method and outside constructor is we are calling setter method that's why there are compting with each other who did it fast, Then error comeis 
  //? Solution is define a new email property/
  set email(value) {
    this._email = value;

  }
}

const us1 = new User("Ankit", "Ankit12");
console.log(us1.email);
 




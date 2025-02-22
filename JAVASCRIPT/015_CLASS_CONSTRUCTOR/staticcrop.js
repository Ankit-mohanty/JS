class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`User is  ${this.username}`);
  }

  // i do not want to give the access all the methods
  //
  // so i am using the prototype
  static createId() {
    return `123`;
  }
}

const us = new User("Ankit");
console.log(us.createId());

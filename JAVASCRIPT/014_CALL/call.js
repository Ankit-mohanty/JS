function setUserName(username) {
  this.username = username;
}

function createUser(userName, email, password) {
  setUserName.call(this, userName);
  this.email = email;
  this.password = password;
}
const chai = new createUser("ankit", "a@g.com", 123);
console.log(chai);

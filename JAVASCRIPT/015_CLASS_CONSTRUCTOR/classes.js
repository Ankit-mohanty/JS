class User{
    constructor(userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password;

    }

    // function
encryptPassword(){
    return `${this.password}abc`
}

changeUserName(){
    return `${this.userName.toUpperCase()}`
}
}

const us= new User("Ankit","aaaaa",1122);
console.log(us.encryptPassword())
console.log(us.changeUserName())
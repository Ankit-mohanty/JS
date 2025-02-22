class User{
    constructor(userName){
        this.userName = userName;
  }
  
 logMe(){
    console.log(`user name is ${this.userName}`)
 }  
}

class Teacher extends User{
    constructor(userName,email,password){
// super keyword always refers to the parent class
        super(userName)
        this.email=email
        this.password=password
    }

    addCourses(){
        console.log(`A new course add by teacher ${this.userName}`)
    }
}

const tt=new Teacher("ANkit",'aa..aa',123);;
console.log(tt)
console.log(tt.addCourses())
tt.logMe()